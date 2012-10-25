places.Models.PlaceModel = Backbone.Model.extend({
  defaults: {
    id: null,
    name: '',
    address: '',
    city: '',
    country: '',
    latitue: 0,
    longitude: 0
  }
});
