import React, { Component, PropTypes } from 'react';
import { browserHistory } from 'react-router';

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

  onStepChange(step) {
    browserHistory.push({
      pathname: `/charactercreation/${this.props.character._id}`,
      query: { step },
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

  renderPointBoxes() {
    return (
      <div className="box container-fluid">
        <div className="row">
          <div className="col-md-3">
            <div className="text-xs-left h2 m-b-0">Skill</div>
            <div className="pull-md-left">
              <PointBox
                points={this.getSkillPoints()}
                dataId="skill-point-box"
              />
            </div>
          </div>

          <div className="col-md-6">
            <p>Jack of all trades, master of none</p>
            <p>Try to select skills within one group</p>
          </div>

          <div className="col-md-3">

            <div className="pull-md-right">
              <PointBox
                points={this.getAttributePoints()}
                dataId="attribute-point-box"
              />
            </div>
            <div className="pull-md-right h2 m-b-0">Attribute</div>
          </div>
        </div>
      </div>
    );
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
          onChange={(step) => { this.onStepChange(step); }}
        />
        {this.renderPointBoxes()}
        {this.renderStep()}
        <button
          type="button"
          data-id="next-button"
          className="btn btn-primary btn-lg"
          onClick={() => { this.onStepChange(this.props.step + 1); }}
        >Next</button>
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

export default CharacterCreation;
