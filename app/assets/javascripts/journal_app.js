window.JournalApp    = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    JournalApp.posts = new JournalApp.Collections.Posts()

    JournalApp.posts.fetch({
      success: function(){
        var view = new JournalApp.Views.PostsIndex({collection: JournalApp.posts})
        $("#main").append(view.render().$el)
      }
    });

  }
};

$(document).ready(function(){
  JournalApp.initialize();
});
