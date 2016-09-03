import { expect } from 'meteor/practicalmeteor:chai';
import { Characters } from './characters.js'

describe('Character methods', function(){

  describe('updateAttribute', function(){

    it('should update attribute', function(){
      let attribute = 'strength';
      let expected = 3;
      id = Characters.insert({ attributes: { [attribute]: 0 }});

      Meteor.call('characters.updateAttribute', id, attribute, expected);

      let actual = Characters.findOne(id).attributes[attribute];
      expect(expected).to.be.equal(actual);
    });
  });

  describe('updateSkill', function(){

    it('should update skill', function(){
      let skill = 'throwing';
      let expected = 3;
      id = Characters.insert({ skills: { [skill]: 0 }});

      Meteor.call('characters.updateSkill', id, skill, expected);

      let actual = Characters.findOne(id).skills[skill];
      expect(expected).to.be.equal(actual);
    });
  });

  describe('toggleSkill', function(){

    context('when skill is not present', function(){
      let skill = 'throwing';
      id = Characters.insert({ skills: {}});

      Meteor.call('characters.toggleSkill', id, skill);

      let skills = Characters.findOne(id).skills;

      it('should add the skill', function() {
        expect(skills).to.contain.key(skill);
      });

      it('should set the value to 1', function() {
        expect(skills[skill]).to.equal(1);
      });
    });

    context('when skill is present', function(){
      it('should call update to remove skill', function() {
        let skill = 'throwing';
        id = Characters.insert({ skills: { [skill]: 3, fighting: 5 }});

        Meteor.call('characters.toggleSkill', id, skill);

        let skills = Characters.findOne(id).skills;
        expect(skills).to.not.contain.key(skill);
      });
    });
  });
})
