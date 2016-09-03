import { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import DieStatLine from '../components/DieStatLine.jsx';
import SkillSelection from '../components/SkillSelection.jsx';



class CharacterCreation extends Component {
  constructor(props){
    super(props);
  }

  updateStat(field, value) {
    let update = {};
    update[field] = value;

    TempCharacters.update(
      this.props.character._id,
      {$set: update}
    );
  }

  toggleSkill(skill){
    let current = this.props.character.skills[skill];
    let update = {};

    if (current === undefined){
      update["skills." + skill] = 1;

      TempCharacters.update(
        this.props.character._id,
        {$set: update}
      );
    } else {
      update["skills." + skill] = "";

      TempCharacters.update(
        this.props.character._id,
        {$unset: update}
      );
    }
  }

  updateSkill(field, value){
    let update = {};
    update["skills." + field] = value ? value : 0;

    TempCharacters.update(
      this.props.character._id,
      {$set: update}
    );
  }
}

CharacterCreation.propTypes = {
  character: PropTypes.object,
}

export default CharacterCreation;
