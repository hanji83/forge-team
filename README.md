# (TeamCowboy Clone)
# Andrew Chen

* [app/models/user.rb](./app/models/user.rb)
* [app/controllers/sessions_controller.rb](./app/controllers/sessions_controller.rb)
* [app/controllers/users_controller.rb](./app/controllers/users_controller.rb)
* [app/controllers/application_controller.rb](./app/controllers/application_controller.rb)
* [app/views/sessions/new.html.erb](./app/views/sessions/new.html.erb)
* [app/views/users/_form.html.erb](./app/views/users/_form.html.erb)

Final Project

www.teamcowboy.com clone (Not all features to be cloned!)
. Idea is to copy a sports team management website

Phase 1: Create Rails DB w/authentication and some basic team positions
- Create user database with authentication X

Goal with tasks:
  - Create user database with authentication X
    - Port over the New Auth Demo and adjust the files to allow for new gems X
  - Create rankings for admin/team owner, captain, and members X
    - Update the User.rb with a migration of the table adding rank
  - Create user experience using Backbone
  
- Create user invite list and e-mail (coincide with roster) with differences between admin (owner), captain, and members

Phase 2: Create Captain and Admin tools
- Create tools to allow a team manager (admin) and captains to create an event for others to RSVP
  - This will include email notification for the events
- Members of the team will be able to RSVP to the invite (yes/maybe/no), write comments
- Statistics will be added: summation of yeses, nos, and maybes, attendance records of individual players

Phase 3: Sport Example 1
- The page will have various sports listed for team creation with an option to create a customized team
- Due to time constraint, only one sport (dragonboat) will have specified tools built for it
- Within dragonboat will be the ability to create a race roster: the arrangement of paddlers for a race
- The arrangement of paddlers will be drag and droppable like that in Trellino
- Statistics about weight-bias will be updated with each drag and drop of a paddler

Phase 4: Sport Example 2
- Dress up the page with CSS
- Page will have a message board with a topic and comments to follow
- Page will have photos, videos, and files drop with tagging included

The four phases of the project were created with easy to hard in mind. While each phase may not take 2 days, the total time length is hopefully 8 days. This seems like an ambitious project, so maybe Phase 3 might need to be split into 2 phases.

I think having at least Phases 1 through 3 would be considered a minimal viable product (MVP).