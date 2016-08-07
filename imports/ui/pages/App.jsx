import React, { Component } from 'react';

import Navigation from '../components/Navigation.jsx';

export const App = ({ children }) => (
  <div>
    <header>
      <h1>Game Master</h1>
      <Navigation />
    </header>
    <main>
      { children }
    </main>
  </div>
)
