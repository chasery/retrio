import React from 'react';
import { Link } from 'react-router-dom';
import TokenService from '../../services/token-service';
import IdleService from '../../services/idle-service';
import logo from '../../assets/icons/retrio-logo.svg';
import './Header.css';

function Header(props) {
  const { subtitle, fullWidth } = props;

  const handleSignOut = () => {
    TokenService.clearAuthToken();
    TokenService.clearCallbackBeforeExpiry();
    IdleService.unRegisterIdleResets();
  };

  return (
    <header className={`Header ${fullWidth ? 'fullWidth' : ''}`} role='banner'>
      <div className='Header__wrapper'>
        <h1 className='Header__title'>
          {TokenService.hasAuthToken() ? (
            <Link to='/boards' className='Header__titleAuthed'>
              <img src={logo} alt='Retrio logo' />
              <span>Retrio</span>
            </Link>
          ) : (
            <Link to='/'>
              <img src={logo} alt='Retrio logo' />
              <span>Retrio</span>
            </Link>
          )}
        </h1>
        {subtitle && <h3 className='Header__subTitle'>{subtitle}</h3>}
        <nav className='Nav' role='navigation'>
          {!TokenService.hasAuthToken() ? (
            <ul>
              <li>
                <Link className='Header__button primary' to='/sign-up'>
                  Sign Up
                </Link>
              </li>
              <li>
                <Link className='Header__button primary' to='/sign-in'>
                  Sign In
                </Link>
              </li>
            </ul>
          ) : (
            <ul>
              <li>
                <Link className='Header__button primary' to='/boards'>
                  Boards
                </Link>
              </li>
              <li>
                <Link className='Header__button primary' to='/teams'>
                  Teams
                </Link>
              </li>
              <li>
                <Link
                  className='Header__button primary'
                  to='/'
                  onClick={handleSignOut}
                >
                  Sign Out
                </Link>
              </li>
            </ul>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Header;
