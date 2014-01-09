JournalApp.Views.PostsIndex = Backbone.View.extend({

  template: JST["posts/index"],

  events: {
    "click button.delete_button": "delete"
  },

  initialize: function() {
    this.listenTo(this.collection, "add remove reset change:title", this.render);
  },

  render: function() {
    this.$el.empty();

    var renderedContent = this.template({
      posts: this.collection
    });

    this.$el.html(renderedContent);
    return this;
  },

  delete: function(event) {
    var deleteItemId = $(event.target).data("id");
    this.collection.get(deleteItemId).destroy({
      success: function () {
        console.log("successful");
      },
      error: function (){
        console.log(arguments)
      }
    });
  }
});