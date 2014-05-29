ForgeTeam.Views.TeamBoatView = Backbone.View.extend({
  initialize: function() {
    this.listenTo(this.model, "sync", this.render);
    this.listenTo(this.model.memberships(), "add destroy sync", this.render);
  },
  
  template: JST["teams/teamBoat"],
  
  events: {
    "click #roster tbody tr":         "clickRoster",
    "click .boat":                    "clickBoat"
  },
  
  render: function () {
    var renderedContent = this.template({
      team: this.model,
      offBoatMembers: this.availableMembers(),
    });
    
    this.$el.html(renderedContent);
    return this;
  },
  clickRoster: function(event){
    // here for two reasons:
    //1. add someone to boat (this is our first click)
    //2. remove someone from boat
    
    //adding to boat
    var $member = $(event.currentTarget);
    if(!this.seat){
      // we must be getting ready to add to the boat
      this.memberIDToMove = $member.data("user-id");
    } else {
      //if we have already clicked on a seat, 
      //we must be removing someone from the boat
      this.removeFromBoat(this.seat);
      this.seat = undefined;
    }
    
    //
  },
  
  clickBoat: function(event){
    
    var $seat = $(event.target);
    var seat = $seat.data("seat-num");
    
    if(this.memberIDToMove && !this.seat){
      //we have a member to move, we must be adding to the boat
      this.addMemberToBoat(this.memberIDToMove, seat);
      this.memberIDToMove = undefined;
      
    } else if(this.seat && !this.memberIDToMove) {
      //we already clicked on the boat, we know this because this.seat has value
      var from = this.seat;
      var to = seat;
      this.swapMembers(from, to);
      this.seat = undefined;
      
    } else if (!this.seat && !this.memberIDToMove){
      this.seat = seat;
      
    } else {
      alert('how the hell did we get here?');
      this.seat = undefined;
      this.memberIDToMove = undefined;
    }
    
  },
  
  removeFromBoat: function(seatId){
    alert('add logic to remove person at ' + seatId + ' from boat');
    
  },
  
  boatLineUp: function () {
    var that = this
    var BoatMembers = new ForgeTeam.Collections.Users();
    var members = this.model.members();
    members.forEach(function (member) {
      var membership = that.model.memberships().findWhere({ user_id: member.id});
      if ( membership.get('seat') != null ) {
        BoatMembers.push(member);
      }
    });
    return BoatMembers;
  },
  
  availableMembers: function () {
    var that = this
    var BoatMembers = new ForgeTeam.Collections.Users();
    var members = this.model.members();
    members.forEach(function (member) {
      var membership = that.model.memberships().findWhere({ user_id: member.id});
      if ( membership.get('seat') == null ) {
        BoatMembers.push(member);
      }
    });
    return BoatMembers;
  },
  
  chooseMember: function(event) {
    var $member = $(event.currentTarget);
    var memberId = $member.data("user-id");
  },
  
  addMemberToBoat: function(memberId, seat) {
    var membership = this.model.memberships().findWhere({
      user_id: memberId
    });
    membership.save({seat: seat}, {patch: true});
  },
  
  swapMembers: function(from_position, to_position) {
    //update the membership for the person in the from_position
    var membership1 = this.model.memberships().findWhere({
      seat: from_position
    });
    
    var membership2 = this.model.memberships().findWhere({
      seat: to_position
    });
    
    membership1.save({ 
      user_id: member1.id, 
      team_id: this.model.id, 
      seat: to_position, 
      rank: "admin" 
    });
    
    membership2.save({ 
      user_id: member1.id, 
      team_id: this.model.id, 
      seat: from_position, 
      rank: "admin" 
    });
  }  
});