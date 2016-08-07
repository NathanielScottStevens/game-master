import React, { Component, PropTypes } from 'react';
import ReactDom from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';


import { Characters } from '../api/characters.js';

import Character from './Character.jsx';

class CharacterList extends Component {
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
        {this.renderCharacters()}
      </div>
    );
  }
}

CharacterList.propTypes = {
  characters: PropTypes.array.isRequired,
}

export default createContainer(() => {
  return {
    characters: Characters.find({}).fetch(),
  };
}, CharacterList);
