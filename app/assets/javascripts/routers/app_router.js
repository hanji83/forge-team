ForgeTeam.Routers.AppRouter = Backbone.Router.extend({
  initialize: function(options) {
    this.$rootEl = options.$rootEl;
    this.user = options.user;
    this.users = options.users;
  },
  
  routes: {
    "":                           "showUser",
    "user/edit":                  "editUser",
    "about":                      "about",
    "contact":                    "contact",
    // "teams":                      "indexTeam",
    "teams/new":                  "createTeam",
    "teams/:id":                  "rosterTeam",
    "teams/:id/lineup":           "lineUpTeam"
  },
  
  showUser: function() {
    ForgeTeam.Collections.teams.fetch({
      success: function() {
      }
    });
    var view = new ForgeTeam.Views.UserShow({
      collection: ForgeTeam.Collections.teams
    });
    
    this._swapView(view);
  },
  
  editUser: function() {
    var userView = new ForgeTeam.Views.UserEdit();
    this._swapView(userView);
  },
  
  about: function() {
    var aboutView = new ForgeTeam.Views.UserAbout();
    this._swapView(aboutView);
  },
  
  contact: function() {
    var contactView = new ForgeTeam.Views.UserContact();
    this._swapView(contactView);
  },
  
  indexTeam: function() {
    ForgeTeam.Collections.teams.fetch({
      success: function() {
      }
    });
    var teamsView = new ForgeTeam.Views.TeamIndex({
      collection: ForgeTeam.Collections.teams
    });
    this._swapView(teamsView);  
  },
  
  createTeam: function() {
    var teamView = new ForgeTeam.Views.TeamNew({ 
      collection: ForgeTeam.Collections.teams 
    });
    this._swapView(teamView);
  },
  
  rosterTeam: function(id) {
    var team = ForgeTeam.Collections.teams.getOrFetch(id);
    
    var teamRosterView = new ForgeTeam.Views.TeamRoster({ 
      model: team
    });
    team.fetch();
    this._swapView(teamRosterView);
  },
  
  lineUpTeam: function(id) {
    var team = ForgeTeam.Collections.teams.getOrFetch(id);
    var teamBoatView = new ForgeTeam.Views.TeamBoatView({
      model: team
    });
    team.fetch();
    this._swapView(teamBoatView);
  },
  
  _swapView: function(view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  }
});