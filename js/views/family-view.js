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
      _.bindAll(this, 'render');

      // Temp Data
      Humans.add([
        {fname:"John",lname:"Doe",sex:"M",age:34},
        {fname:"Jane",lname:"Doe",sex:"F",age:27},
        {fname:"Jim",lname:"Doe",sex:"M",age:5}
      ]);

      this.render();
    },
    render:function(){
      _.each(Humans.models, function(member){
        var html = this.template(member.toJSON());
        this.$el.append(html);
      }, this);
    }
  });
  return FamilyView;
});