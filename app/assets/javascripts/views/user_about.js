ForgeTeam.Views.UserAbout = Backbone.View.extend({
  template: JST['users/userAbout'],
  
  render: function() {
    var renderedContent = this.template();
    this.$el.html(renderedContent);
    return this;
  }
});