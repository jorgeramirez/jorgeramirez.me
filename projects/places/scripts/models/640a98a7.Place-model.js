places.Models.PlaceModel = Backbone.Model.extend({
  defaults: {
    id: null,
    name: '',
    address: '',
    city: '',
    country: '',
    latitude: 0,
    longitude: 0
  }
});
