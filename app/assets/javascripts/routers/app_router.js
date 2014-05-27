ForgeTeam.Routers.AppRouter = Backbone.Router.extend({
  initialize: function(options) {
    this.$rootEl = options.$rootEl;
    this.user = options.user;
    this.users = options.users;
  },
  
  routes: {
    "":                           "showUser",
    "user/edit":                  "editUser",
    "teams":                      "indexTeam",
    "teams/new":                  "createTeam",
    "teams/:id/edit":             "editTeam",
    "teams/:id":                  "showTeam",
    "teams/:id/manage":           "manageTeam"
  },
  
  showUser: function() {
    
  },
  
  showTeam: function(id) {
    var team = ForgeTeam.Collections.teams.getOrFetch(id);
    var teamShow = new ForgeTeam.Views.showTeam({ 
      model: team
    });
    this._swapView(teamShow);
  },
  
  createTeam: function() {
    var teamView = new ForgeTeam.Views.newTeam(
      { collection: ForgeTeam.Collections.teams }
    );
    this._swapView(teamView);
  },
  
  _swapView: function(view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  }
});