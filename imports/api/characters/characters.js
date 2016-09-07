import { Mongo } from 'meteor/mongo';

export const Characters = new Mongo.Collection('Characters');

Characters.helpers({
  // This doesn't work. Helpers are at the document level, not the collection level
  create() {
    const newCharacter = {
      attributes: {
        strength: 1,
        agility: 1,
        smarts: 1,
        spirit: 1,
        vigor: 1,
      },
      skills: {},
    };

    Characters.insert(newCharacter);

    return newCharacter;
  },
});

Factory.define('character', Characters, {
  attributes: {
    strength: 1,
    agility: 2,
    smarts: 3,
    spirit: 4,
    vigor: 5,
  },
  skills: {
    climbing: 1,
    fighting: 2,
    gambling: 3,
    intimidation: 4,
  },
});

Factory.define('character.empty', Characters, {
  attributes: {
    strength: 1,
    agility: 1,
    smarts: 1,
    spirit: 1,
    vigor: 1,
  },
  skills: {},
});


if (Meteor.isServer) {
  Meteor.publish('Characters', function () {
    return Characters.find();
  });
}

Meteor.methods({
  'Characters.updateAttribute': function (id, attribute, value) {
    Characters.update(id, { $set: { [`attributes.${attribute}`]: value } });
  },

  'Characters.updateSkill': function (id, skill, value) {
    Characters.update(id, { $set: { [`skills.${skill}`]: value } });
  },

  'Characters.toggleSkill': function(id, skill) {
    const character = Characters.findOne(id);

    if (character.skills[skill]) {
      Characters.update(id, { $unset: { [`skills.${skill}`]: '' } });
    } else {
      Characters.update(id, { $set: { [`skills.${skill}`]: 1 } });
    }
  },
});
