
window.places = {
  serverUrl: 'http://190.104.153.121/proxy/proxy.php?proxy_url=http://comealong.me/CAE_API',
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  AuthData: {}, // auth information
  
  renderMainPage: function() {
    
    $( '#geocomplete' ).geocomplete({ 
      map: '.map-canvas',
      details: 'form'
    });

    // instantiate places collection
    places.Places = new places.Collections.PlacesCollection();

    // instantiate PlaceAdd view
    places.PlaceAddView = new places.Views.PlaceAdd();

    // places table

    function renderPlaces( collection, response ) {
      var placesListTpl = _.template ( $( '#places-list' ).html(), {
        places: collection.models
      });
      

      $( '#loading' ).fadeOut( 400, function() {
        $( '#places-table' ).append( placesListTpl );

        // setup listjs in order to do filtering
        places.PlacesList = new List( 'places-table' , {
          valueNames: [ 'name', 'address', 'city', 'country' ]
        });
      });


    }

    function error( collection, response ) {
      console.log( "error" );
    }
    
    // fetch the places
    places.Places.fetch({
      success: renderPlaces,
      error: error,
      add: true,
      dataType: 'json'
    });
  },

  // resets to do before login again
  beforeLogin: function() {
    $( '#app' ).hide();
    $( '#places-table' ).children().remove();
    places.PlacesList = null;
    
    if( !!places.PlaceAddView ){
      places.PlaceAddView.undelegateEvents();
    }
  },

  //log in to ComeAlong
  loginComeAlong : function() {
    var me = this;
 
    function success( auth ) {
      console.log( "logged into comealong" );
      console.log( auth );
      
      // Finally render the Main Page!
      $( '#app' ).show();
      me.renderMainPage();
    }
    
    function error() {
      console.log( "comealong login error" );
      console.log( arguments );
    }

    $.ajax({
      type: 'POST',
      url: places.serverUrl + '/um/session',
      data: JSON.stringify({
        name: "facebook", 
        authString: places.AuthData.accessToken
      }),
      dataType: 'json',
      contentType: 'application/json; charset=utf-8',
      crossDomain: true,
      success: success,
      error: error 
    });
  
  },

  init: function() {
    var me = this;

    // facebook setup
    window.session = {};

    window.fbAsyncInit = function() {
      FB.init({
        appId: '306294449486120'
      });

      session.user = new FacebookUser();
      
      session.user.on('facebook:unauthorized', function(model, response) {
        me.beforeLogin();
        session.user.login();
      });

      session.user.on('facebook:connected', function(model, response) {
        
        //capture auth response data
        places.AuthData = response.authResponse;

        //init session in comealong
        me.loginComeAlong();
      });

      session.user.on('facebook:disconnected', function(model, response) {
        me.beforeLogin();
        session.user.login();
      });

      $('#logout').click(function(){ 
        session.user.logout();
      });
      
      session.user.updateLoginStatus();
    };

    // load fbjssdk
    (function(d){
       var js, id = 'facebook-jssdk', ref = d.getElementsByTagName('script')[0];
       if (d.getElementById(id)) {return;}
       js = d.createElement('script'); js.id = id; js.async = true;
       js.src = "//connect.facebook.net/en_US/all.js";
       ref.parentNode.insertBefore(js, ref);
     }(document));    
  }
  
};

$(document).ready(function(){
  places.init();
});

