import React, { Component } from 'react';

import DieStatLine from '../components/DieStatLine.jsx';

export default class extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>
        <h3>Attributes</h3>
        <div className="container">
            <DieStatLine label="Strength" />
            <DieStatLine label="Agility" />
            <DieStatLine label="Smarts" />
            <DieStatLine label="Spirit" />
            <DieStatLine label="Vigor" />
        </div>
      </div>
    );
  }
}
