// Configuration
require.config({
  // Must remove before deployment
  urlArgs: 'bust=' +  (new Date()).getTime(),
  paths: {
    jquery: 'libs/jquery-1.8.3.min',
    underscore: 'libs/underscore-min',
    backbone: 'libs/backbone-min',
    handlebars: 'libs/handlebars-1.0.rc.1',
    text: 'libs/text',
    templates: '../templates'
  },
  // You won't need this if you use a AMD complaint version
  shim: {
    underscore: {
      exports: '_'
    },
    backbone: {
      deps: [
        'jquery',
        'underscore'
      ],
      exports: 'Backbone'
    },
    handlebars: {
      exports: 'Handlebars'
    }
  }
});

// Application
require([
  'router',
  'backbone'
], function(AppRouter, Backbone) {
  'use strict';

  var app = new AppRouter();
  Backbone.history.start({pushState:true});
});
