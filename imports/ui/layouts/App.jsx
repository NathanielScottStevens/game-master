import React, { PropTypes } from 'react';

import Navigation from '../components/Navigation.jsx';

const App = ({ children }) => (
  <div>
    <header>
      <h1>Game Master</h1>
      <Navigation />
    </header>
    <main>
      { children }
    </main>
  </div>
);

App.propTypes = {
  children: PropTypes.object,
};

export default App;
