import React, { Component, PropTypes } from 'react';
import { Characters } from '../api/characters.js';

export default class Character extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.character.firstName} {this.props.character.lastName}</h2>
      </div>
    );
  }
}

Character.propTypes = {
  character: PropTypes.object.isRequired,
}
