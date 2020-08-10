var ArtistsView = Backbone.View.extend({
  render: function () {
    this.$el.html("ARTISTS VIEW");

    return this;
  },
});

var AlbumsView = Backbone.View.extend({
  render: function () {
    this.$el.html("ALBUMS VIEW");

    return this;
  },
});

var GenresView = Backbone.View.extend({
  render: function () {
    this.$el.html("GENRES VIEW");

    return this;
  },
});
