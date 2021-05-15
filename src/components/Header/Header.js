import React from 'react';
import { Link } from 'react-router-dom';
import TokenService from '../../services/token-service';
import IdleService from '../../services/idle-service';
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
            <Link to='/boards'>Retrio</Link>
          ) : (
            <Link to='/'>Retrio</Link>
          )}
        </h1>
        <h3 className='Header__subTitle'>{subtitle}</h3>
        <nav className='Nav' role='navigation'>
          {!TokenService.hasAuthToken() ? (
            <ul>
              <li>
                <Link to='/sign-up'>Sign Up</Link>
              </li>
              <li>
                <Link to='/sign-in'>Sign In</Link>
              </li>
            </ul>
          ) : (
            <ul>
              <li>
                <Link to='/boards'>Boards</Link>
              </li>
              <li>
                <Link to='/teams'>Teams</Link>
              </li>
              <li>
                <Link to='/' onClick={handleSignOut}>
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
