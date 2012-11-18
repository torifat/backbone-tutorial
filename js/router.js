define([
  'backbone',
  'views/family-view'
], function(Backbone, FamilyView){
  'use strict';

  var AppRouter = Backbone.Router.extend({
      routes:{
          "*actions":"start"
      },
      start:function(){
        new FamilyView();
      }
  });
  return AppRouter;
});