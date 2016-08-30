import React, { Component, PropTypes } from 'react';

import CheckListCard from './CheckListCard.jsx';

class SkillSelection extends Component {
  constructor(props){
    super(props);

    this.onChange = props.onChange.bind(this);
  }

  getItems(attribute){
    let skillsForAttribute = this.props.skills.filter(skill => {
      return skill.attribute === attribute;
    });

    return skillsForAttribute.map(skill => {
      let hasSkill = this.props.characterSkills.hasOwnProperty(skill.name);

      return {
        id: skill.name,
        label: skill.name,
        value: hasSkill
      }
    });
  }

  render(){
    let strengthItems = this.getItems('strength');
    let agilityItems = this.getItems('agility');
    let smartsItems = this.getItems('smarts');
    let spiritItems = this.getItems('spirit');

    return (
      <div>
        <div className="row">
          <div className="col-sm-6">
            <CheckListCard
              label="strength"
              items={strengthItems}
              onChange={this.onChange}
            />
          </div>
          <div className="col-sm-6">
            <CheckListCard
              label="agility"
              items={agilityItems}
              onChange={this.onChange}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <CheckListCard
              label="smarts"
              items={smartsItems}
              onChange={this.onChange}
            />
          </div>
          <div className="col-sm-6">
            <CheckListCard
              label="spirit"
              items={spiritItems}
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
  skills: PropTypes.array,
}

export default SkillSelection;
