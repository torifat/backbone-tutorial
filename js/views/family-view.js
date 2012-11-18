define([
  'backbone',
  'handlebars',
  'models/human',
  'collections/humans',
  'text!templates/human.html',
], function(Backbone, Handlebars, Human, Humans, HumanTemplate) {
  'use strict';

  var FamilyView = Backbone.View.extend({
    el:"#family",
    template: Handlebars.compile(HumanTemplate),

    events: {
      'click td': 'clicked'
    },

    clicked: function(e) {
      alert('Clicked on - ' + $(e.currentTarget).text());
    },

    initialize:function(){
      _.bindAll(this, 'render', 'addOne', 'addAll');

      Humans.bind('add', this.addOne);
      Humans.bind('reset', this.addAll);

      // Humans.fetch()
      // Temp Data
      Humans.add([
        {fname:"John",lname:"Doe",sex:"M",age:34},
        {fname:"Jane",lname:"Doe",sex:"F",age:27},
        {fname:"Jim",lname:"Doe",sex:"M",age:5}
      ]);
    },

    addOne: function(human) {
      var html = this.template(human.toJSON());
      this.$el.append(html);
    },

    addAll: function(){
      Todos.each(this.addOne);
    },

    render:function(){
    }
  });
  return FamilyView;
});