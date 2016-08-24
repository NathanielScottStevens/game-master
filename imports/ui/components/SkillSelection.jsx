import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import { Skills } from '../../api/skills/skills.js';

import CheckListCard from './CheckListCard.jsx';

class SkillSelection extends Component {
  constructor(props){
    super(props);
    this.onChange = props.onChange.bind(this);
  }

  getItems(skills){
    return skills.map(skill => {
      let hasSkill = this.props.characterSkills.hasOwnProperty(skill.name);

      return {
        id: skill.name,
        label: skill.name,
        initialValue: hasSkill
      }
    });
  }

  render(){
    let strengthItems = this.getItems(this.props.strengthSkills);
    let agilityItems = this.getItems(this.props.agilitySkills);

    return (
      <div>
        <div className="row">
          <div className="col-sm-6">
            <CheckListCard
              label="Strength"
              items={strengthItems}
              onChange={this.onChange}
            />
          </div>
          <div className="col-sm-6">
            <CheckListCard
              label="Agility"
              items={agilityItems}
              onChange={this.onChange}
            />
          </div>
        </div>
      </div>
    );
  }
}

SkillSelection.propTypes = {
  characterSkills: PropTypes.object,
  onChange: PropTypes.func,
  strengthSkills: PropTypes.array,
  agilitySkills: PropTypes.array,
  smartsSkills: PropTypes.array,
  spiritSkills: PropTypes.array
}

export default SkillSelectionContainer = createContainer(({ params }) => {
  Meteor.subscribe('skills');
  return {
    strengthSkills: Skills.find({attribute: 'strength'}).fetch(),
    agilitySkills: Skills.find({attribute: 'agility'}).fetch(),
    smartsSkills: Skills.find({attribute: 'smarts'}).fetch(),
    spiritSkills: Skills.find({attribute: 'spirit'}).fetch(),
  }
}, SkillSelection);
