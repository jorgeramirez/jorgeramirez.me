places.Views.PlaceAdd = Backbone.View.extend({
  el: '#place-add',

  events: {
    'click #place-add button' : 'addNewPlace'
  },

  addNewPlace: function( e ) {
    var me = this,
        elements = me.$el.find("form")[0].elements;
    
    console.log("add place");

    console.log({
      name: elements.name.value,
      address: elements.formatted_address.value,
      city: elements.locality.value,
      country: elements.country.value,
      latitude: elements.lat.value,
      longitude: elements.lng.value
    });
    
    e.preventDefault();
   
    places.Places.create({
      name: elements.name.value,
      address: elements.formatted_address.value,
      city: elements.locality.value,
      country: elements.country.value,
      latitude: elements.lat.value,
      longitude: elements.lng.value
    }, {
      wait: true,
      contentType: "application/json; charset=utf-8",
      dataType: 'json',
      success: function () {
        console.log( "success" );
        console.log( arguments );
      },
      error: function () {
        console.log( "error" );
        console.log( arguments );
      }
    });
  }
});
