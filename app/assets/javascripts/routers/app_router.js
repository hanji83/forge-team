ForgeTeam.Routers.AppRouter = Backbone.Router.extend({
  initialize: function(options) {
    this.$rootEl = options.$rootEl;
    this.user = options.user;
  },
  
  routes: {
    "":        "show"
  },
  
  show: function(id) {
    var that = this;
    var userView = new ForgeTeam.Views.UserShow( { model: this.user })
    // this._getUser(id, function (user) {
    //   var userView = new ForgeTeam.Views.UserShow({
    //     model: user
    //   });
    // 
    //   that._swapView(userView);
    // });
    
    this._swapView(userView);
  },
    
  // _getUser: function (id, callback) {
  //   var that = this;
  //   var user = this.users.get(id);
  //   
  //   if (!user) {
  //     user = new ForgeTeam.Models.User( { id: id });
  //     user.collection = this.users;
  //     user.fetch( {
  //       success: function () {
  //         that.users.add(user);
  //         callback(user);
  //       }
  //     });
  //   }
  //   else {
  //     callback(user);
  //   }
  // },
  
  _swapView: function(view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  }
});