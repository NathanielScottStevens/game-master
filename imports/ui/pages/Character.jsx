import React, { Component, PropTypes } from 'react';

class Character extends Component {

  renderCharacter() {
    const character = this.props.character;

    if (character) {
      return (
        <p>{character.firstName} {character.lastName}</p>
      );
    }
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
  character: PropTypes.object,
};
