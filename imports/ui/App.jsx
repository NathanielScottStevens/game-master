import React, { Component, PropTypes } from 'react';
import ReactDom from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';

import { Characters } from '../api/characters.js';

import Character from './Character.jsx';

class App extends Component {
  constructor(props) {
    super(props);
  }

  renderCharacters() {
    let characters = this.props.characters;
    return characters.map(character =>
      <Character key={character._id} character={character} />
    );
  }

  render() {
    return (
      <div className="container">
        <header>
          <h1>Game Master</h1>
        </header>
        <div>
        {this.renderCharacters()}
        </div>
      </div>
    );
  }
}

App.propTypes = {
  characters: PropTypes.array.isRequired,
}

export default createContainer(() => {
  return {
    characters: Characters.find({}).fetch(),
  };
}, App);
