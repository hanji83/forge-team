ForgeTeam.Views.UserContact = Backbone.View.extend({
  template: JST['users/userContact'],
  
  render: function() {
    var renderedContent = this.template();
    this.$el.html(renderedContent);
    return this;
  }
});