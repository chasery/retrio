import React from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import './Header.css';

function Header(props) {
  const location = useLocation();

  return (
    <header className='Header' role='banner'>
      <div className='Header__wrapper'>
        <h1 className='Header__title'>
          <Link to='/'>Retrio</Link>
        </h1>
        <nav className='Nav' role='navigation'>
          {location.pathname === '/' ? (
            <ul>
              <li>
                <Link to='/'>Sign Up</Link>
              </li>
              <li>
                <Link to='/boards'>Sign In</Link>
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
                <Link to='/'>Sign Out</Link>
              </li>
            </ul>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Header;
