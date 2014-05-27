ForgeTeam.Collections.Users = Backbone.Collection.extend({
  url: "/api/users",
  model: ForgeTeam.Models.User,
  getOrFetch: function(id){
    var model = this.get(id);
    if (model){
      return model;
    } else {
      model = new ForgeTeam.Models.User({id: id});
      model.fetch();
      return model;
    }
  }
});

ForgeTeam.Collections.users = new ForgeTeam.Collections.Users();