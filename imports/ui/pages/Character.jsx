import React, { Component, PropTypes } from 'react';
import ReactDom from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';

import { Characters } from '../../api/characters/characters.js';

import CharacterComp from '../components/Character.jsx';

class Character extends Component {
  constructor(props) {
    super(props);
  }

  renderCharacter() {
    let character = this.prop.character;
    debugger;
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
  character: PropTypes.object.isRequired,
}

export default CharacterContainer = createContainer(({ params }) => {
  return {
    character: Characters.findOne(params.id),
  }
}, Character);
