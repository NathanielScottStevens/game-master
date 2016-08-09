import React, { Component, PropTypes } from 'react';
import ReactDom from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';
import { Mongo } from 'meteor/mongo';

import { Characters } from '../../api/characters/characters.js';

import CharacterComp from '../components/Character.jsx';

class Character extends Component {
  constructor(props) {
    super(props);
  }

  renderCharacter() {
    let character = this.props.character;
    return (
      <p>{character.firstName} {character.lastName}</p>
    );
  }

  render() {
    return (
      <div>
        <h3>Character Page</h3>
        {this.renderCharacter()}
      </div>
    );
  }
}

Character.propTypes = {
  character: PropTypes.object.isRequired
}

export default CharacterContainer = createContainer(({ params }) => {
  const { id } = params;
  const character = Characters.findOne(new Mongo.ObjectID(id));
  return {
    character
  };
}, Character);
