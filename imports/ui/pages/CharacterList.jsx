import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';


import { Characters } from '../../api/characters/characters.js';

import Character from '../components/Character.jsx';

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

export default CharacterListContainer = createContainer(() => {
  Meteor.subscribe('characters');
  return {
    characters: Characters.find({}).fetch(),
  };
}, CharacterList);
