ForgeTeam.Collections.Users = Backbone.Collection.extend({
  model: ForgeTeam.Models.User,
  url: "/api/users"
});

ForgeTeam.Collections.users = new ForgeTeam.Collections.Users();