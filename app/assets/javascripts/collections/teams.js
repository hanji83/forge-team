ForgeTeam.Collections.Teams = Backbone.Collection.extend({
  url: 'api/teams',
  model: ForgeTeam.Models.Team,
  getOrFetch: function(id){
    var model = this.get(id);
    if (model){
      return model;
    } else {
      model = new ForgeTeam.Models.Team({id: id});
      model.fetch();
      return model;
    }
  }
});