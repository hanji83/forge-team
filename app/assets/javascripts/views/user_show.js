ForgeTeam.Views.UserShow = Backbone.View.extend({
  template: JST['users/show'],
  
  render: function() {
    console.log(this.model);
    var renderedContent = this.template({ user: this.model });
    this.$el.html(renderedContent);
    return this;
  }
});