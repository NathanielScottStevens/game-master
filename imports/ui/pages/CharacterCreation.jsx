import React, { Component, PropTypes } from 'react';

import BreadCrumb from '../components/BreadCrumb.jsx';
import SkillSelection from '../components/SkillSelection.jsx';
import StatList from '../components/StatList.jsx';


class CharacterCreation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      step: 0,
      attributePoints: 5,
      skillPoints: 15,
    };

    this.onSkillSelectionChange = this.onSkillSelectionChange.bind(this);
    this.onAttributeChange = this.onAttributeChange.bind(this);
    this.onSkillChange = this.onSkillChange.bind(this);
  }

  onSkillSelectionChange(skill) {
    const delta = this.props.character.skills[skill] ? 1 : -1;
    const newPoints = this.state.skillPoints + delta;

    this.setState({ skillPoints: newPoints });

    Meteor.call('characters.toggleSkill', this.props.character._id, skill);
  }

  onAttributeChange(attribute, value) {
    Meteor.call('characters.updateAttribute', this.props.character._id, attribute, value);
  }

  onSkillChange(skill, value) {
    const attribute = skills.find(s => s.name === skill).attribute;
    attributeDiff = value - this.props.character.attributes[attribute];

    const delta = this.props.character.skills[skill] - value;
    const newPoints = this.state.skillPoints + delta;

    this.setState({ skillPoints: newPoints });

    Meteor.call('characters.updateSkill', this.props.character._id, skill, value);
  }

  renderStep() {
    switch (this.state.step) {
      default:
      case 0:
        return (
          <SkillSelection
            characterSkills={this.props.character.skills}
            skills={this.props.skills}
            onChange={this.onSkillSelectionChange}
          />);
      case 1:
        return (
          <StatList
            label="Attributes"
            items={this.props.character.attributes}
            onChange={this.onAttributeChange}
          />);
      case 2:
        return (
          <StatList
            label="Skills"
            items={this.props.character.skills}
            onChange={this.onSkillChange}
          />);
    }
  }

  render() {
    return (
      <div>
        <BreadCrumb
          list={[
            'Select Skills',
            'Attributes',
            'Point Skills',
          ]}
          selected={this.state.step}
          onChange={() => {}}
        />
        {this.renderStep()}
      </div>
    );
  }
}

CharacterCreation.propTypes = {
  character: PropTypes.object.required,
  skills: PropTypes.object.required,
};

export default CharacterCreation;
