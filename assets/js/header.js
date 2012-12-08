$(function(){
    $("ul.nav > li").removeClass("active").children().each(function() {
        if(location.href === this.href){
            $(this).parent().addClass('active');
            return false;
        }
    });

    $("#contactMail").attr('href', "mailto:" + "jorge" + "@jramirez.me");
});
