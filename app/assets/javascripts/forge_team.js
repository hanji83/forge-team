window.ForgeTeam = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    var user = new ForgeTeam.Models.User({ id: window.userId });
    user.fetch({
      success: function() {
        ForgeTeam.router = new ForgeTeam.Routers.AppRouter({
          $rootEl: $('#content'),
          user: user
        });
        Backbone.history.start();
      }
    });

    // var teams = new ForgeTeam.Collections.Teams();
    // var sports = new ForgeTeam.Collections.Sports();
    // var dbranks = new ForgetTeam.Collections.DBRanks();
    
  }
};

$(function() {
  ForgeTeam.initialize();
});
