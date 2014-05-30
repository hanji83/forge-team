ForgeTeam.Views.TeamIndex = Backbone.View.extend({
  initialize: function() {
    this.listenTo(this.collection, "sync", this.render);
  },
  
  template: JST["teams/teamIndex"],
  
  render: function () {
    var renderedContent = this.template({
      teams: this.collection
    });
    this.$el.html(renderedContent);
    return this;
  }
});