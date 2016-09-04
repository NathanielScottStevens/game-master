import React from 'react';
import { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import BreadCrumb from '../components/BreadCrumb.jsx';
import SkillSelection from '../components/SkillSelection.jsx';
import StatList from '../components/StatList.jsx';


class CharacterCreation extends Component {
  constructor(props){
    super(props);
    this.state = {step: 0};
  }

  onSkillSelectionChange(skill) {
    Meteor.call('characters.toggleSkill', this.props.character._id, skill);
  }

  renderStep(){
    switch (this.state.step) {
      default:
      case 0:
        return ( <SkillSelection onChange={ this.onSkillSelectionChange.bind(this) } /> );
      case 1:
        return (
          <StatList label="Attributes" items={ this.props.character.attributes } /> );
      case 2:
        return ( <StatList label="Skills" items={ this.props.character.skills } /> );
    }
  }

  render(){
    return (
      <div>
        <BreadCrumb />
        {this.renderStep()}
      </div>
    );
  }
}

CharacterCreation.propTypes = {
  character: PropTypes.object,
}

export default CharacterCreation;
