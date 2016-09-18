import React, { Component, PropTypes } from 'react';

import CheckListCard from './CheckListCard.jsx';


class SkillSelection extends Component {
  constructor(props) {
    super(props);

    this.onChange = props.onChange.bind(this);
  }

  getItems(attribute) {
    const skillsForAttribute = this.props.skills.filter(skill =>
      skill.attribute === attribute
    );

    return skillsForAttribute.map(skill => {
      const hasSkill = this.props.characterSkills.hasOwnProperty(skill.name);
      return {
        id: skill.name,
        label: skill.name,
        value: hasSkill,
      };
    });
  }

  render() {
    const strengthItems = this.getItems('strength');
    const agilityItems = this.getItems('agility');
    const smartsItems = this.getItems('smarts');
    const spiritItems = this.getItems('spirit');

    return (
      <div>
        <div className="row">
          <div className="col-md-6">
            <CheckListCard
              label="smarts"
              items={smartsItems}
              onChange={this.onChange}
            />
          </div>
          <div className="col-md-6">
            <CheckListCard
              label="agility"
              items={agilityItems}
              onChange={this.onChange}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <CheckListCard
              label="spirit"
              items={spiritItems}
              onChange={this.onChange}
            />
          </div>
          <div className="col-md-6">
            <CheckListCard
              label="strength"
              items={strengthItems}
              onChange={this.onChange}
            />
          </div>
        </div>
      </div>
    );
  }
}

SkillSelection.propTypes = {
  characterSkills: PropTypes.object.isRequired,
  skills: PropTypes.array.isRequired,
  onChange: PropTypes.func,
};

export default SkillSelection;
