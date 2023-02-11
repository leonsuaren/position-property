import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export const Navbar = () => {
  const params = useLocation();

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to='/'>Positioning</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to='/relative' className={params.pathname === '/relative' ? 'nav-link active-page' : 'nav-link'}>Relative</Link>
            </li>
            <li className="nav-item">
              <Link className={params.pathname === '/absolute' ? 'nav-link active-page' : 'nav-link'} to='/absolute'>Absolute</Link>
            </li>
            <li className="nav-item">
              <Link className={params.pathname === '/fixed' ? 'nav-link active-page' : 'nav-link'} to='/fixed'>Fixed</Link>
            </li>
            <li className="nav-item">
              <Link className={params.pathname === '/sticky' ? 'nav-link active-page' : 'nav-link'} to='/sticky'>Sticky</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}