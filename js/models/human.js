define([
  'backbone'
], function(Backbone){
  'use strict';
  
  var Human = Backbone.Model.extend({
      defaults:{
          fname:"Homo",
          lname:"Sapiens",
          age:"0",
          sex:"M"
      }
  });
  return Human;
});