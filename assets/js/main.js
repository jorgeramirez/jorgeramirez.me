// url: https://api.github.com/users/jorgeramirez/repos?type=owner&sort=pushed

(function( window, $, _ ) {
  'use strict';

  // renders projects list if possible.
  function renderProjects( response ) {
    
    var projectsTpl = _.template( $( '#projects-template' ).html(), {
      projects: response.data
    });

    $( '#projects' ).append( projectsTpl );
  }

  // load the projects
  $(function () {
    $.ajax({
      url: 'https://api.github.com/users/jorgeramirez/repos?type=owner&sort=pushedi?callback',
      type: 'GET',
      dataType: 'jsonp',
      localCache: true,
      cacheTTL: 24,
      cacheKey: 'projects',
      success: renderProjects
    });
  });

}( window, jQuery, _ ));
