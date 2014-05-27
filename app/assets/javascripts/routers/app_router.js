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
    "teams/:id/lineup":           "lineUpTeam",
    "teams/:id":                  "rosterTeam",
  },
  
  showUser: function() {
    var userView = new ForgeTeam.Views.UserShow({});
    this._swapView(userView);
  },
  
  indexTeam: function() {
    // show a list of teams to the user
  },
  
  createTeam: function() {
    var teamView = new ForgeTeam.Views.newTeam({ 
      collection: ForgeTeam.Collections.teams 
    });
    this._swapView(teamView);
  },
  
  rosterTeam: function(id) {
    var team = ForgeTeam.Collections.teams.getOrFetch(id);
    var teamRoster = new ForgeTeam.Views.rosterTeam({ 
      model: team,
    });
    this._swapView(teamRoster);
  },
  
  lineUpTeam: function(id) {
    
  },
  
  _swapView: function(view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  }
});