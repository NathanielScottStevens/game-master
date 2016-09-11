import React from 'react';
import { IndexLink, Link } from 'react-router';

export default function Navigation() {
  return (
    <nav className="navbar navbar-light bg-faded">
      <div className="nav navbar-nav">
        <IndexLink to="/" className="nav-item nav-link" activeClassName="active">Index</IndexLink>
        <Link
          to="/charactercreation"
          className="nav-item nav-link"
          activeClassName="active"
        >
          Character Creation
        </Link>
      </div>
    </nav>
  );
}
