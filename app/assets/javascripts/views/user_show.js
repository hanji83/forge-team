ForgeTeam.Views.UserShow = Backbone.View.extend({
  initialize: function() {
    this.listenTo(this.collection, "sync", this.render);
  },
  
  template: JST['users/userShow'],
  
  events: { "submit form": "submit" },
  
  render: function(id) {
    var user = ForgeTeam.Collections.users.findWhere({id: userId});
    var renderedContent = this.template({ user: user, team: this.model, teams: this.collection });
    this.$el.html(renderedContent);
    return this;
  },
  
  submit: function (event) {
    var view = this;
    event.preventDefault();
    
    var params = $(event.currentTarget).serializeJSON();
    var team = new ForgeTeam.Models.Team(params["team"]);
    team.save({}, {
      success: function () {
        console.log("WIN WIN WIN!");
        view.collection.add(team);
        view.render();
        Backbone.history.navigate("#/teams/" + team.id, {trigger: true})
      },
      error: function() {
        console.log("You FUCK UP!");
      }
    });
  }
});