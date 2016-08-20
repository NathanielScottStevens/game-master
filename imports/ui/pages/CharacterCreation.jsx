import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import DieStatLine from '../components/DieStatLine.jsx';
import { TempCharacters } from '../../startup/client/local.js';

class CharacterCreation extends Component {
  constructor(props){
    super(props);

  }

  updateStat(field, value){
    let update = {};
    update[field] = value;

    TempCharacters.update(
      this.props.character._id,
      {$set: update}
    );
  }

  render() {
    return (
      <div>
        <h3>Attributes</h3>
        <div className="container">
            <DieStatLine
              label="Strength"
              field="strength"
              value={this.props.character.strength}
              action={this.updateStat.bind(this)}
            />
            <DieStatLine
              label="Agility"
              field="agility"
              value={this.props.character.agility}
              action={this.updateStat.bind(this)}
            />
            <DieStatLine
              label="Smarts"
              field="smarts"
              value={this.props.character.smarts}
              action={this.updateStat.bind(this)}
            />
            <DieStatLine
              label="Spirit"
              field="spirit"
              value={this.props.character.spirit}
              action={this.updateStat.bind(this)}
            />
            <DieStatLine
              label="Vigor"
              field="vigor"
              value={this.props.character.vigor}
              action={this.updateStat.bind(this)}
            />
        </div>
      </div>
    );
  }
}

CharacterCreation.propTypes = {
  character: PropTypes.object
}

export  default CharacterCreationContainer = createContainer(({ params }) => {
  return {
    character: TempCharacters.findOne()
  };
}, CharacterCreation);
