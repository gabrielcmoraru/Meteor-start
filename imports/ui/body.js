import { Template } from 'meteor/templating';

import './body.html';

Template.body.helpers({
  hello: 'Hi people'
});

Template.body.events({
  'click .test'(event) {
    console.log('hello');
  }
})