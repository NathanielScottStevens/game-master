import React, { Component, PropTypes } from 'react';
import ReactDom from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';
import { Mongo } from 'meteor/mongo';

import { Characters } from '../../api/characters/characters.js';

export default class extends Component {
  createNewCharacter(event){
    alert('new character');
  }

  render() {
    return (
      <div>
        <h3>Character Creation</h3>
        <button onClick={this.createNewCharacter.bind(this)}>New Character</button>
      </div>
    );
  }
}
