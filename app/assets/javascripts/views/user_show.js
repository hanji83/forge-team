ForgeTeam.Views.UserShow = Backbone.View.extend({
  template: JST['users/show'],
  
  render: function(id) {
    debugger
    var user = new ForgeTeam.Collections.teams.getOrFetch(id);
    var renderedContent = this.template({ user: user });
    this.$el.html(renderedContent);
    return this;
  }
});