ForgeTeam.Views.TeamLineUp = Backbone.View.extend({
  initialize: function() {
    this.listenTo(this.model, "sync", this.render);
    this.listenTo(this.model.memberships(), "add destroy sync", this.render);
  },
  
  template: JST["teams/teamLineUp"],
  
  events: {
    "click ":     "swapMembers",
  },
  
  render: function () {
    var renderedContent = this.template({
      team: this.model,
      members: this.model.members(),
    });
    this.$el.html(renderedContent);
    return this;
  },
  
  swapMembers: function() {
    
  }
});