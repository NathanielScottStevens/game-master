import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { Characters } from '../../api/characters/characters.js';

export default class Character extends Component {
  render() {
    return (
      <div>
        <Link to={"characters/" + this.props.character._id}>{this.props.character.firstName} {this.props.character.lastName}</Link>
      </div>
    );
  }
}

Character.propTypes = {
  character: PropTypes.object.isRequired,
}
