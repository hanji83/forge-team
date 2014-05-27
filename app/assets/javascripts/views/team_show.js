ForgeTeam.Views.showTeam = Backbone.View.extend({
  initialize: function() {
    this.listenTo(this.model, "sync", this.render);
    this.listenTo(this.model.memberships(), "change", this.render);
  },
  
  template: JST["teams/showTeam"],
  
  events: {
  },
  
  render: function () {
    var renderedContent = this.template({ 
      team: this.model,
      members: this.model.users()
    });
    this.$el.html(renderedContent);
    return this;
  },
});