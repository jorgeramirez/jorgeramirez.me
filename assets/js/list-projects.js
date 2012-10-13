// url: https://api.github.com/users/jorgeramirez/repos?type=owner&sort=pushed

(function( window, $, _ ) {
  'use strict';

  // renders the project list.
  function renderProjects( response ) {
    var projects = _.sortBy( response.data , function( project ) {
      return project.pushed_at;
    });

    var projectsTpl = _.template( $( '#projects-template' ).html(), {
      projects: projects.reverse()
    });

    $( '#loading' ).fadeOut( 400, function() {
      $( '#projects' ).append( projectsTpl );
    });
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
