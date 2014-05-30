ForgeTeam.Views.TeamNew = Backbone.View.extend({
  template: JST["teams/teamNew"],
  
  events: { "submit form": "submit" },
  
  render: function () {
    var renderedContent = this.template({ team: this.model })
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
        view.collection.add(team);
        view.render();
        Backbone.history.navigate("#/teams/" + team.id, {trigger: true})
      }
    });
  }
});