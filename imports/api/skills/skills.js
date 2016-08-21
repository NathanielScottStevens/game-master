import { Mongo } from 'meteor/mongo';

export const Skills = new Mongo.Collection('skills');

//Removed autopublish
if (Meteor.isServer){
  // Meteor.publish('skills', function(attribute) {
  //   if (attribute){
  //     debugger;
  //     return Skills.find({attribute: attribute})
  //   } else {
  //     return Skills.find();
  //   }
  // })
  Meteor.publish('skills', function() {
      return Skills.find();
  })
}
