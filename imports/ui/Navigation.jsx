import React, { Component } from 'react';
import { IndexLink, Link } from 'react-router';

export default class Navigation extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-faded">
        <div className="nav navbar-nav">
          <IndexLink to="/" className="nav-item nav-link" activeClassName="active">Index</IndexLink>
          <Link to="/one" className="nav-item nav-link" activeClassName="active">Page One</Link>
          <Link to="/two"className="nav-item nav-link" activeClassName="active">Page Two</Link>
          <Link to="/characters" className="nav-item nav-link" activeClassName="active">Characters</Link>
        </div>
      </nav>
    );
  }
}
