ForgeTeam.Models.Team = Backbone.Model.extend({
  urlRoot: 'api/teams',
  
  // memberships: function() {
  //   var teamMemberships = new ForgeTeam.Collections.TeamMemberships();
  //   return teamMemberships;
  // },
  
  parse: function (response) {
    if (response.memberships) {
      this.memberships().set(response.memberships , { parse: true });
      delete response.memberships;
    }
    
    return response;
  },
  
  memberships: function () {
    if(!this._memberships) {
      this._memberships = new ForgeTeam.Collections.TeamMemberships([], { team: this });
    }
    return this._memberships;
  },
  
  users: function () {
    return this.memberships().map(function (member) {
      return ForgeTeam.Collections.users.get(member.get("user_id"));
    });
  },
  
  availableUsers: function () {
    var members = this.memberships();
    var availableMembers = new ForgeTeam.Collections.Users([], {});
    _.each(availMembers, function(member) {
      if (!_.contains(this.users, member)) {
        availableMembers.push(member);
      }
    });
    
    return availableMembers;
  }
});