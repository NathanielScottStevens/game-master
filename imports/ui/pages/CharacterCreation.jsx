import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import { TempCharacters } from '../../startup/client/local.js';
import { Skills } from '../../api/skills/skills.js';

import DieStatLine from '../components/DieStatLine.jsx';
import SkillSelection from '../components/SkillSelection.jsx';

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

  updateSkill(field, value){
    let update = {};
    update["skills." + field] = value;

    TempCharacters.update(
      this.props.character._id,
      {$set: update}
    );
  }

  renderSkills(){
    let skills = this.props.skills;
    let character = this.props.character;

    return skills.map(skill =>
        <DieStatLine
          key={skill._id}
          label={skill.name}
          field={skill.name}
          value={character.skills[skill.name]}
          action={this.updateSkill.bind(this)}
        />
    );
  }

  render() {
    return (
      <div>
        <SkillSelection />
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
        <h3>Skills</h3>
        <div className="container">
          {this.renderSkills()}
        </div>
      </div>
    );
  }
}

CharacterCreation.propTypes = {
  character: PropTypes.object,
  skills: PropTypes.array
}

export default CharacterCreationContainer = createContainer(({ params }) => {
  Meteor.subscribe("skills");
  return {
    character: TempCharacters.findOne(),
    skills: Skills.find().fetch()
  };
}, CharacterCreation);
