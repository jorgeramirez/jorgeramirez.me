// url: https://api.github.com/users/jorgeramirez/repos?type=owner&sort=pushed

(function( window, $, _ ) {
  'use strict';

  // renders projects list if possible.
  function renderProjects( data ) {

    var projectsTpl = _.template( $( '#projects-template' ).html(), {
      projects: data
    });

    $( '#projects' ).append( projectsTpl );
  }

  // load the projects
  $(function () {
    $.ajax({
      url: 'https://api.github.com/users/jorgeramirez/repos?type=owner&sort=pushed',
      type: 'GET',
      dataType: 'json',
      localCache: true,
      cacheTTL: 24,
      cacheKey: 'projects',
      success: renderProjects
    });
  });

}( window, jQuery, _ ));
