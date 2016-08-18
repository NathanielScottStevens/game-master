import React, { Component } from 'react';

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
