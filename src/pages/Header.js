/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [home, setHome] = useState(true);
  const [dash, setDash] = useState(false);
  return (
    <div>
      <nav className='navbar navbar-expand-lg navbar-light bg-light ps-3'>
        <div className='container'>
          <span className='navbar-brand mb-0 fs-2 fw-bold'>Shortly</span>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
              <li className='nav-item'>
                <Link
                  className={`${
                    home
                      ? 'nav-link active fw-bold text-info'
                      : 'nav-link text-secondary fw-normal'
                  }`}
                  aria-current='page'
                  to={'/'}
                  onClick={() => {
                    setDash(false);
                    setHome(true);
                  }}>
                  Home
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  className={`${
                    dash
                      ? 'nav-link active fw-bold text-info'
                      : 'nav-link text-secondary fw-normal'
                  }`}
                  aria-current='page'
                  to={'/dashboard'}
                  onClick={() => {
                    setDash(true);
                    setHome(false);
                  }}>
                  Dashboard
                </Link>
              </li>
            </ul>
            <form className='d-flex'>
              <Link
                to={'/sign-in'}
                className='btn btn-outline-info login'
                type='submit'>
                Login
              </Link>
              <Link
                to={'/sign-up'}
                className='btn btn-info text-white rounded-pill signup'
                type='submit'>
                Sign Up
              </Link>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
