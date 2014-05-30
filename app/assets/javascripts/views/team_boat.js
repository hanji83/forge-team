ForgeTeam.Views.TeamBoatView = Backbone.View.extend({
  initialize: function() {
    this.listenTo(this.model, "sync", this.render);
    this.listenTo(this.model.memberships(), "add destroy save sync", this.render);
  },
  
  template: JST["teams/teamBoat"],
  
  events: {
    "click #roster tbody tr":         "clickRoster",
    "click #roster thead tr":         "removeFromBoat",
    "click .boat":                    "clickBoat"
  },
  
  render: function () {
    var renderedContent = this.template({
      team: this.model,
      offBoat: this.availableMembers(),
      onBoat: this.unAvailableMembers()
    });
    this.$el.html(renderedContent);
    this.fillInNames();
    this.weightDistributionFrontBack();
    this.weightDistributionLeftRight();
    return this;
  },
  
  fillInNames: function () {
    var that = this;
    var memberships = that.model.memberships();
    this.unAvailableMembers().each(function(member) { 
      //debugger
      var seat = memberships.findWhere({user_id: member.id}).get('seat');
      $('[data-seat-num="'+seat+'"]').text((member.get('fname')).charAt(0) + (member.get(('lname')).charAt(0)));
    });
  },
  
  clickRoster: function(event){
    // here for two reasons:
    //1. add someone to boat (this is our first click)
    //2. remove someone from boat
    
    //adding to boat
    var $member = $(event.currentTarget);
    if(this.seat == undefined){
      // we must be getting ready to add to the boat
      this.memberIDToMove = $member.data("user-id");
    } 
    else if (this.seat !== undefined && !this.memberIDToMove) {
      //if we have already clicked on a seat, 
      //we must be removing someone from the boat
      //and swapping with someone onto the roster
      this.memberIDToMove = $member.data("user-id");
      this.removeAndSwap(this.seat);
      this._resetAllStates();
    }
  },
  
  clickBoat: function(event){
    
    var $seat = $(event.target);
    var seat = $seat.data("seat-num");
    
    if(this.memberIDToMove && !this.seat){ // works
      //we have a member to move, we must be adding to the boat
      this.addMemberToBoat(this.memberIDToMove, seat);
      this.memberIDToMove = undefined;
    }
    else if((this.seat !== undefined) && !this.memberIDToMove) {
      //we already clicked on the boat, we know this because this.seat has value
      var from = this.seat;
      var to = seat;
      this.swapMembers(from, to);
      this.seat = undefined;
    }
    else if (!this.seat && !this.memberIDToMove){
      this.seat = seat;
    }
    else {
      alert('how the hell did we get here? please refresh the page');
      this._resetAllStates();
    }
  },
  
  removeFromBoat: function() {
    var membershipToRemove = this.model.memberships().findWhere({
      seat: this.seat
    });
    
    membershipToRemove.save({seat: null}, {patch: true});
    //alert('add logic to remove person at ' + seatId + ' from boat');
    this._resetAllStates();
  },
  
  removeAndSwap: function() {
    var membershipToRemove = this.model.memberships().findWhere({
      seat: this.seat
    });
    var membershipToAdd = this.model.memberships().findWhere({
      user_id: this.memberIDToMove
    });
    
    membershipToRemove.save({seat: null}, {patch: true});
    membershipToAdd.save({seat: this.seat}, {patch: true});
    this._resetAllStates();
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
      var membership = that.model.memberships().findWhere({ 
        user_id: member.id
      });
      
      if ( membership.get('seat') === null ) {
        BoatMembers.push(member);
      }
    });
    return BoatMembers;
  },
  
  unAvailableMembers: function () {
    var that = this
    var BoatMembers = new ForgeTeam.Collections.Users();
    var members = this.model.members();
    members.forEach(function (member) {
      var membership = that.model.memberships().findWhere({ 
        user_id: member.id
      });
      
      if ( membership.get('seat') !== null ) {
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
    var replace = this.model.memberships().findWhere({
      seat: seat
    });
    
    if (replace) {
      replace.save({seat: null}, {patch: true});
    }
    
    var membership = this.model.memberships().findWhere({
      user_id: memberId
    });
    membership.save({seat: seat}, {patch: true});
  },
  
  weightDistributionFrontBack: function() {
    var that = this;
    var frontWeight = 0;
    var backWeight = 0;
    
    this.model.members().forEach(function (member) {
      var membership = that.model.memberships().findWhere({user_id: member.get('id')});
      var memberWeight = member.get('weight');
      
      if (membership.get('seat') < 11 && membership.get('seat') !== null) {
        frontWeight += memberWeight
      }
      else if (membership.get('seat') !== null) {
        backWeight += memberWeight
      }
    });
    
    if (frontWeight > backWeight) {
      $('#weightfb').text("The boat weight is front-biased.")
    }
    else if(frontWeight < backWeight) {
      $('#weightfb').text("The boat weight is rear-biased.")
    }
    else {
      $('#weightfb').text("The boat weight is balanced with respect to front and back.")
    }
  },
  
  weightDistributionLeftRight: function() {
    var that = this;
    var leftWeight = 0;
    var rightWeight = 0;
    
    this.model.members().forEach(function (member) {
      var membership = that.model.memberships().findWhere({user_id: member.get('id')});
      var memberWeight = member.get('weight');
      
      if ((membership.get('seat') % 2 == 0) && membership.get('seat') !== null) {
        rightWeight += memberWeight
      }
      else if (membership.get('seat') !== null) {
        leftWeight += memberWeight
      }
    });
    // debugger
    
    if (leftWeight > rightWeight) {
      $('#weightlr').text("The boat weight is left-biased.")
    }
    else if(leftWeight < rightWeight) {
      $('#weightlr').text("The boat weight is right-biased.")
    }
    else {
      $('#weightlr').text("The boat weight is balanced with respect to left and right.")
    }
  },
  
  sideCheck: function() {
    
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
      user_id: membership1.get('user_id'), 
      team_id: this.model.id, 
      seat: to_position, 
      rank: "admin" 
    });
    
    if(membership2) {
      membership2.save({ 
        user_id: membership2.get('user_id'), 
        team_id: this.model.id, 
        seat: from_position, 
        rank: "admin" 
      });
    }
  },
  
  _resetAllStates: function () {
    this.seat = undefined;
    this.memberIDToMove = undefined;
  }  
});