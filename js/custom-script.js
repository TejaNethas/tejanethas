$(document).ready(function () {
    var navHeight = $("nav").height();
    $('body').css({'padding-top': navHeight + 16 + 'px'});

    $.fn.sidenavOpen = function(){
        $('#mySidenav').addClass("width-250px");
    }
    $(".side-nav-open").click(function(){
        $.fn.sidenavOpen();
    });
    $.fn.sidenavClose = function(){
         $('#mySidenav').removeClass("width-250px");
    }
    $(".side-nav-close").click(function(){
        $.fn.sidenavClose();
    });

    var links = $('.navbar ul li a');
    $.each(links, function (key, va) {
        if (va.href == document.URL) {
            $(this).addClass('active');
        }
    });

   	$(".ripple-effect").click(function(e){
        var rippler = $(this);

        // create .ink element if it doesn't exist
        if(rippler.find(".ink").length == 0) {
            rippler.append("<span class='ink'></span>");
        }

        var ink = rippler.find(".ink");

        // prevent quick double clicks
        ink.removeClass("animate");

        // set .ink diametr
        if(!ink.height() && !ink.width())
        {
            var d = Math.max(rippler.outerWidth(), rippler.outerHeight());
            ink.css({height: d, width: d});
        }

        // get click coordinates
        var x = e.pageX - rippler.offset().left - ink.width()/2;
        var y = e.pageY - rippler.offset().top - ink.height()/2;

        // set .ink position and add class .animate
        ink.css({
          top: y+'px',
          left:x+'px'
        }).addClass("animate");
    });

});