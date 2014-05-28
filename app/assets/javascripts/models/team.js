ForgeTeam.Models.Team = Backbone.Model.extend({
  urlRoot: 'api/teams',
  
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
  
  members: function () {
    return this.memberships().map(function (member) {
      return ForgeTeam.Collections.users.get(member.get("user_id"));
    });
  },
  
  possibleUsers: function () {
    var members = this.members();
    var nonMembers = new ForgeTeam.Collections.Users([], {});
    ForgeTeam.Collections.users.each(function(user) {
      //debugger
      if (!_.contains(members, user)) {
        nonMembers.push(user);
      }
    });
    return nonMembers;
  }
});