import { spies, stubs } from 'meteor/practicalmeteor:sinon';
import { expect } from 'meteor/practicalmeteor:chai';
import { Characters } from './characters.js'

describe('Character methods', function(){

  describe('updateAttribute', function(){
    beforeEach(function(){
      spies.create("characterUpdate", Characters, 'update');
    });

    afterEach(function(){
      spies.restoreAll();
    });

    it('should call update with correct params', function(){
      let id = 1;
      let attribute = 'strength';
      let value = 3;

      Meteor.call('characters.updateAttribute', id, attribute, value);

      expect(spies.characterUpdate).to.have.been.called;
      expect(spies.characterUpdate.args[0][0]).to.equal(id);
      expect(spies.characterUpdate.args[0][1]).to.deep.equal({$set: { attributes: { [attribute]: value } } });
    });
  });

  describe('updateSkill', function(){
    beforeEach(function(){
      spies.create("characterUpdate", Characters, 'update');
    });

    afterEach(function(){
      spies.restoreAll();
    });

    it('should call update with correct params', function(){
      let id = 1;
      let skill = 'throwing';
      let value = 3;

      Meteor.call('characters.updateSkill', id, skill, value);

      expect(spies.characterUpdate).to.have.been.called;
      expect(spies.characterUpdate.args[0][0]).to.equal(id);
      expect(spies.characterUpdate.args[0][1]).to.deep.equal({$set: {skills: { [skill]: value } } });
    });
  });

  describe('toggleSkill', function(){
    let character = {
      id: 1,
      attributes: {},
      skills: {throwing: 3}
    };

    beforeEach(function(){
      spies.create("characterUpdate", Characters, 'update');
      stubs.create("characterFindOne", Characters, 'findOne');
      stubs.characterFindOne.onFirstCall().returns(character);
    });

    afterEach(function(){
      spies.restoreAll();
      stubs.restoreAll();
    });

    context('when skill is not present', function(){
      it('should call update to add skill', function() {
          Meteor.call('characters.toggleSkill', character.id, 'fighting');

          expect(spies.characterUpdate).to.have.been.called;
          expect(spies.characterUpdate.args[0][0]).to.equal(character.id);
          expect(spies.characterUpdate.args[0][1]).to.deep.equal({$set: {skills: { fighting: 1 } } });
      });
    });

    context('when skill is present', function(){
      it('should call update to remove skill', function() {
          Meteor.call('characters.toggleSkill', character.id, 'throwing');

          expect(spies.characterUpdate).to.have.been.called;
          expect(spies.characterUpdate.args[0][0]).to.equal(character.id);
          expect(spies.characterUpdate.args[0][1]).to.deep.equal({$unset: {skills: { throwing: undefined } } });
      });
    });
  });
})
