import React, { Component } from 'react';
import { IndexLink, Link } from 'react-router';

export default class Navigation extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-faded">
        <div className="nav navbar-nav">
          <IndexLink to="/" className="nav-item nav-link" activeClassName="active">Index</IndexLink>
          <Link to="/characters" className="nav-item nav-link" activeClassName="active">Characters</Link>
          <Link to="/charactercreation" className="nav-item nav-link" activeClassName="active">Character Creation</Link>
        </div>
      </nav>
    );
  }
}
