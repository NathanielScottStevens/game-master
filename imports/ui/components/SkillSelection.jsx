import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import { Skills } from '../../api/skills/skills.js';

class SkillSelection extends Component {

  renderSkills(skills){
    return skills.map(skill =>
      <div className="form-check" key={skill._id}>
        <label className="form-check-label">
          <input className="form-check-input" type="checkbox" value="" />
            {skill.name}
        </label>
      </div>
    );
  }

  render(){
    return(
      <div className="form-group">
        <div>
          <h4>Strength</h4>
          {this.renderSkills(this.props.strengthSkills)}
        </div>
        <div>
          <h4>Agility</h4>
          {this.renderSkills(this.props.agilitySkills)}
        </div>
        <div>
          <h4>Smarts</h4>
          {this.renderSkills(this.props.smartsSkills)}
        </div>
        <div>
          <h4>Spirit</h4>
          {this.renderSkills(this.props.spiritSkills)}
        </div>
      </div>
    );
  }
}

SkillSelection.propTypes = {
  skills: PropTypes.array
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
