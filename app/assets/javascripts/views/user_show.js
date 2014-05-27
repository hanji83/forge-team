ForgeTeam.Views.UserShow = Backbone.View.extend({
  template: JST['users/userShow'],
  
  render: function(id) {
    var user = ForgeTeam.Collections.users.findWhere({id: userId});
    var renderedContent = this.template({ user: user });
    this.$el.html(renderedContent);
    return this;
  }
});