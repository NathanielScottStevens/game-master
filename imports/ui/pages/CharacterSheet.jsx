import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import Attributes from '../components/Attributes.jsx';
import Skills from '../components/Skills.jsx';

class CharacterSheet extends Component {
  constructor(props){
    super(props);

  render() {
    return (
      <div>
        <Attributes character={this.props.character} />
      </div>
    );
  }
}

CharacterSheet.propTypes = {
  character: PropTypes.object.required
}

export default CharacterSheetContainer = createContainer(({ params }) => {
  var { id } = params;
  Meteor.subscribe("characters", character);
  var character = Characters.findOne(id);

  return {
    character: character
  };
}, CharacterSheet);
