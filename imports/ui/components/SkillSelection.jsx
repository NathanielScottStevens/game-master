import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import { Skills } from '../../api/skills/skills.js';

import CheckListCard from './CheckListCard.jsx';

class SkillSelection extends Component {
  render(){
    return(
      <div>
        <div className="row">
          <div className="col-sm-6">
            <CheckListCard title="Strength" items={this.props.strengthSkills} />
          </div>
          <div className="col-sm-6">
            <CheckListCard title="Spirit" items={this.props.spiritSkills} />
          </div>
        </div>
        
        <div className="row">
          <div className="col-sm-6">
            <CheckListCard title="Smarts" items={this.props.smartsSkills} />
          </div>
          <div className="col-sm-6">
            <CheckListCard title="Agility" items={this.props.agilitySkills} />
          </div>
        </div>
      </div>
    );
  }
}

SkillSelection.propTypes = {
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
