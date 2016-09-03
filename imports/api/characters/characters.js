import { Mongo } from 'meteor/mongo';

export const Characters = new Mongo.Collection('characters');

Characters.helpers({
  create() {
    let newCharacter = {
      attributes: {
        strength: 1,
        agility: 1,
        smarts: 1,
        spirit: 1,
        vigor: 1
      },
      skills: {}
    };

    Characters.insert(newCharacter);

    return newCharacter;
  }
});


if (Meteor.isServer) {
  Meteor.publish('characters', function() {
    return Characters.find();
  })
}

Meteor.methods({
  'characters.updateAttribute': function(id, attribute, value) {
    Characters.update(id, { $set: { attributes: { [attribute]: value }}});
  },

  'characters.updateSkill': function(id, skill, value) {
    Characters.update(id, { $set: { skills: { [skill]: value }}});
  },

  'characters.toggleSkill': function(id, skill) {
    let character = Characters.findOne(id);

    if (character.skills[skill]) {
      Characters.update(id, { $unset: { skills: { [skill]: undefined }}});
    } else {
      Characters.update(id, { $set: { skills: { [skill]: 1 }}});
    }
  },
} );
