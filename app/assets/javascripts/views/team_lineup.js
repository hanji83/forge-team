ForgeTeam.Views.TeamBoatView = Backbone.View.extend({
  initialize: function() {
    this.listenTo(this.model, "sync", this.render);
    this.listenTo(this.model.memberships(), "add destroy sync", this.render);
  },
  
  template: JST["teams/teamBoat"],
  
  events: {
    "click .boat-member":     "swapMembers",
  },
  
  render: function () {
    var renderedContent = this.template({
      team: this.model,
      members: this.model.members(),
    });
    this.$el.html(renderedContent);
    return this;
  },
  
  swapMembers: function(event) {
    var $seat = $(event.currentTarget);
    var position = $seat.data('position');
    if (!this.from_position){
      this.from_position = position;
    } else {
      var to_position = position;  
      //now we definitely have both a from position and a to position
      
      //update the membership for the person in the from_position
      
      //at the end we need to reset our from position
      this.from_position = undefined;
    }
    // var member_id = $member.data('member-id');
  }
});