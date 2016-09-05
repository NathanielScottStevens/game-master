import { describe, it, context } from 'meteor/practicalmeteor:mocha';
import { expect } from 'meteor/practicalmeteor:chai';
import { Characters } from './characters.js';

describe('Character methods', function () {
  describe('updateAttribute', function () {
    it('should update attribute', function () {
      const attribute = 'strength';
      const expected = 3;
      const id = Characters.insert({ attributes: { [attribute]: 0 } });

      Meteor.call('characters.updateAttribute', id, attribute, expected);

      const actual = Characters.findOne(id).attributes[attribute];
      expect(expected).to.be.equal(actual);
    });
  });

  describe('updateSkill', function () {
    it('should update skill', function () {
      const skill = 'throwing';
      const expected = 3;
      const id = Characters.insert({ skills: { [skill]: 0 } });

      Meteor.call('characters.updateSkill', id, skill, expected);

      const actual = Characters.findOne(id).skills[skill];
      expect(expected).to.be.equal(actual);
    });
  });

  describe('toggleSkill', function () {
    context('when skill is not present', function () {
      const skill = 'throwing';
      const id = Characters.insert({ skills: {} });

      Meteor.call('characters.toggleSkill', id, skill);

      const skills = Characters.findOne(id).skills;

      it('should add the skill', function () {
        expect(skills).to.contain.key(skill);
      });

      it('should set the value to 1', function () {
        expect(skills[skill]).to.equal(1);
      });
    });

    context('when skill is present', function () {
      it('should call update to remove skill', function () {
        const skill = 'throwing';
        const id = Characters.insert({ skills: { [skill]: 3, fighting: 5 } });

        Meteor.call('characters.toggleSkill', id, skill);

        const skills = Characters.findOne(id).skills;
        expect(skills).to.not.contain.key(skill);
      });
    });
  });
});
