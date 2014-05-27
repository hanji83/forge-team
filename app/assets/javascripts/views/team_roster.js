ForgeTeam.Views.TeamRoster = Backbone.View.extend({
  initialize: function() {
    this.listenTo(this.model, "sync", this.render);
    this.listenTo(this.model.memberships(), "add destroy sync", this.render);
  },
  
  template: JST["teams/teamRoster"],
  
  events: {
    "click #nonmembers tbody tr":     "addMember",
    "click #members tbody tr":        "deleteMember"
  },
  
  render: function () {
    var renderedContent = this.template({
      team: this.model,
      members: this.model.members(),
      nonMembers: this.model.possibleUsers()
    });
    this.$el.html(renderedContent);
    return this;
  },
  
  addMember: function (event) {
    var userId = $(event.currentTarget).data("user-id");
    this.model.memberships().create({
      user_id: userId, 
      team_id: this.model.id,
      rank: 'admin'
    }, {
      success: function(response) {}
    });
  },
  
  deleteMember: function(event){
    var that = this;
    var userId = $(event.currentTarget).data("user-id");
    var membership = this.model.memberships().findWhere({
      user_id: userId
    });
    membership.destroy({
      success: function() {
        that.model.memberships().remove(membership);
      }
    });
  }
});