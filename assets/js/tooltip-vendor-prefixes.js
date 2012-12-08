// Inspects CSS code blocks and add special style to properties that
// needs vendor prefix.
var blog = blog || {};


 // Inspects CSS code blocks looking for rules that have the following
 // format
 //
 //   /*-vp property: value; -vp*/
 // 
 // that tells to this function that the property needs the vendor prefixes tooltip. 
blog.processVendorPrefixes = function() {
  $( 'pre[data-lang=css] > span.com' ).each(function( i, attr ){
    var needPrefixRegex = /\/\*-vp .*/;
    if( needPrefixRegex.test( attr.innerHTML ) ){
      
      var rule = attr.innerHTML.split( /\-vp/ )[1];
      var members = rule.trim().split( ':' );
      var tooltip = $( 
         _.template( $( '#data-tooltip-tpl' ).html(), { property: members[0].trim(), value: members[1] } ) 
      );
      $( this ).replaceWith( tooltip );
    }
  });
};
