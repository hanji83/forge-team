ForgeTeam.Views.UserEdit = Backbone.View.extend({
  events: { 
    "submit form": "updateUser",
  },
    
  template: JST['users/userEdit'],
  
  render: function(id) {
    var user = ForgeTeam.Collections.users.findWhere({id: userId});
    var renderedContent = this.template({ user: user });
    this.$el.html(renderedContent);
    return this;
  },
  
  updateUser: function (event) {
    debugger
    var view = this;
    event.preventDefault();
    
    var params = $(event.currentTarget).serializeJSON();
    debugger
    var user = ForgeTeam.Collections.users.findWhere({id: userId});
    user.save(params.user, { patch: true });
    Backbone.history.navigate("#", {trigger: true});
  }
});