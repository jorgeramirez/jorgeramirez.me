places.Collections.PlacesCollection = Backbone.Collection.extend({

  model: places.Models.PlaceModel,

  url: places.serverUrl + '/places'

});
