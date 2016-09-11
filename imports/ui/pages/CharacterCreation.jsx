import React, { Component, PropTypes } from 'react';
import { withRouter } from 'react-router';

import BreadCrumb from '../components/BreadCrumb.jsx';
import SkillSelection from '../components/SkillSelection.jsx';
import StatList from '../components/StatList.jsx';
import PointBox from '../components/PointBox.jsx';


class CharacterCreation extends Component {
  constructor(props) {
    super(props);

    this.onSkillSelectionChange = this.onSkillSelectionChange.bind(this);
    this.onAttributeChange = this.onAttributeChange.bind(this);
    this.onSkillChange = this.onSkillChange.bind(this);
    this.onNext = this.onNext.bind(this);
  }

  onSkillSelectionChange(skill) {
    Meteor.call('Characters.toggleSkill', this.props.character._id, skill);
  }

  onAttributeChange(attribute, value) {
    Meteor.call('Characters.updateAttribute', this.props.character._id, attribute, value);
  }

  onSkillChange(skill, value) {
    Meteor.call('Characters.updateSkill', this.props.character._id, skill, value);
  }

  onNext() {
    this.props.router.push({
      pathname: `/charactercreation/${this.props.character._id}`,
      query: { step: this.props.step + 1 },
    });
  }

  getSkillPoints() {
    const max = 15;
    let current = max;

    Object.keys(this.props.character.skills).forEach((charSkill) => {
      const attribute = this.props.skills.find(s => s.name === charSkill).attribute;
      const value = this.props.character.skills[charSkill];
      const attributeLevel = this.props.character.attributes[attribute];

      if (value > attributeLevel) {
        current -= attributeLevel;
        current -= 2 * (value - attributeLevel);
      } else {
        current -= value;
      }
    }, this);

    return current;
  }

  getAttributePoints() {
    const max = 5;
    let current = max;

    Object.keys(this.props.character.attributes).forEach((attribute) => {
      if (this.props.character.attributes[attribute] > 1) {
        current -= this.props.character.attributes[attribute] - 1;
      }
    }, this);

    return current;
  }

  renderStep() {
    switch (this.props.step) {
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
    if (this.props.isLoading) {
      return (<p>Loading...</p>);
    }

    return (
      <div>
        <BreadCrumb
          list={[
            'Select Skills',
            'Attributes',
            'Point Skills',
          ]}
          selected={this.props.step}
          onChange={() => {}}
        />
        <PointBox points={this.getSkillPoints()} dataId="skill-point-box" />
        <PointBox points={this.getAttributePoints()} dataId="attribute-point-box" />
        {this.renderStep()}
        <button type="button" data-id="next-button" onClick={this.onNext}>Next</button>
      </div>
    );
  }
}

CharacterCreation.propTypes = {
  character: PropTypes.object,
  skills: PropTypes.array,
  isLoading: PropTypes.bool,
  step: PropTypes.number,
  router: PropTypes.object,
};

export default withRouter(CharacterCreation);
