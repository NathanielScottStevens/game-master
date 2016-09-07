import { describe, it, context } from 'meteor/practicalmeteor:mocha';
import { expect } from 'meteor/practicalmeteor:chai';
import { Characters } from './characters.js';

describe('Character methods', function () {
  describe('updateAttribute', function () {
    it('should update attribute', function () {
      const attribute = 'strength';
      const expected = 3;
      const id = Characters.insert({ attributes: { [attribute]: 0 } });

      Meteor.call('Characters.updateAttribute', id, attribute, expected);

      const actual = Characters.findOne(id).attributes[attribute];
      expect(expected).to.be.equal(actual);
    });

    it('should not delete other attributes', function () {
      const id = Characters.insert({ attributes: { strength: 0, agility: 0 } });

      Meteor.call('Characters.updateAttribute', id, 'strength', 1);
      Meteor.call('Characters.updateAttribute', id, 'agility', 1);
      const attributes = Characters.findOne(id).attributes;

      expect(attributes).to.contain.key('strength');
      expect(attributes).to.contain.key('agility');
    });
  });

  describe('updateSkill', function () {
    it('should update skill', function () {
      const skill = 'throwing';
      const expected = 3;
      const id = Characters.insert({ skills: { [skill]: 0 } });

      Meteor.call('Characters.updateSkill', id, skill, expected);

      const actual = Characters.findOne(id).skills[skill];
      expect(expected).to.be.equal(actual);
    });

    it('should not delete other attributes', function () {
      const id = Characters.insert({ skills: { throwing: 0, fighting: 0 } });

      Meteor.call('Characters.updateSkill', id, 'throwing', 1);
      Meteor.call('Characters.updateAttribute', id, 'fighting', 1);
      const skills = Characters.findOne(id).skills;

      expect(skills).to.contain.key('throwing');
      expect(skills).to.contain.key('fighting');
    });
  });

  describe('toggleSkill', function () {
    context('when skill is not present', function () {
      const skill = 'throwing';
      const id = Characters.insert({ skills: {} });

      Meteor.call('Characters.toggleSkill', id, skill);

      let skills = Characters.findOne(id).skills;

      it('should add the skill', function () {
        expect(skills).to.contain.key(skill);
      });

      it('should set the value to 1', function () {
        expect(skills[skill]).to.equal(1);
      });

      context('when there are multiple calls', function () {
        const skillTwo = 'climbing';
        const skillThree = 'fighting';
        Meteor.call('Characters.toggleSkill', id, skillTwo);
        Meteor.call('Characters.toggleSkill', id, skillThree);
        skills = Characters.findOne(id).skills;

        it('should not replace skills object', function () {
          expect(skills).to.contain.key(skillTwo);
          expect(skills).to.contain.key(skillThree);
        });
      });
    });

    context('when skill is present', function () {
      it('should call update to remove skill', function () {
        const skill = 'throwing';
        const id = Characters.insert({ skills: { [skill]: 3, fighting: 5 } });

        Meteor.call('Characters.toggleSkill', id, skill);

        const skills = Characters.findOne(id).skills;
        expect(skills).to.not.contain.key(skill);
      });
    });
  });
});
