import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to='/positioning'>Positioning</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page"  to='/relative'>Relative</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/absolute'>Absolute</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/fixed'>Fixed</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/sticky'>Sticky</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}