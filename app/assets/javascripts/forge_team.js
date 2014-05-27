window.ForgeTeam = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    ForgeTeam.Collections.users.fetch({
      success: function() {
        ForgeTeam.router = new ForgeTeam.Routers.AppRouter({
          $rootEl: $('#content'),
          user: ForgeTeam.Collections.users.get(window.userId),
          users: ForgeTeam.Collections.users
        });
        Backbone.history.start();
      }
    });
  }
};

// Composite Views were deemd to be un-needed
// Backbone.CompositeView = Backbone.View.extend({
//   addSubView: function (selector, subview) {
//     var selectorSubViews =
//       this.subviews()[selector] || (this.subviews()[selector] = []);
// 
//     selectorSubViews.push(subview);
// 
//     var $selectorEl = this.$(selector);
//     $selectorEl.append(subview.$el);
//   },
// 
//   remove: function () {
//     Backbone.View.prototype.remove.call(this);
// 
//     // remove all subviews as well
//     _(this.subviews()).each(function (selectorSubViews, selector) {
//       _(selectorSubViews).each(function (subview) {
//         subview.remove();
//       });
//     });
//   },
// 
//   removeSubView: function (selector, subview) {
//     var selectorSubViews =
//       this.subviews()[selector] || (this.subviews()[selector] = []);
// 
//     var subviewIndex = selectorSubViews.indexOf(subview);
//     selectorSubViews.splice(subviewIndex, 1);
//     subview.remove();
//   },
// 
//   renderSubViews: function () {
//     var view = this;
// 
//     _(this.subviews()).each(function (selectorSubViews, selector) {
//       var $selectorEl = view.$(selector);
//       $selectorEl.empty();
// 
//       _(selectorSubViews).each(function (subview) {
//         $selectorEl.append(subview.render().$el);
//         subview.delegateEvents();
//       });
//     });
//   },
// 
//   subviews: function () {
//     if (!this._subviews) {
//       this._subviews = {};
//     }
//     return this._subviews;
//   }
// });

$(ForgeTeam.initialize);
