$(document).ready( function() {
    var navStartTop = $('nav').position().top;
    var navUlStartLeft = $('nav ul li').position().left;
    var navHeight = $('nav').height()

    $('header nav a.on-page').click( function(event) {
        event.preventDefault();
        var sectionToJumpTo = '#' + $(this).text();
        var topOfSection = $(sectionToJumpTo).position().top - navHeight;
        $('html, body').animate({scrollTop: topOfSection}, 1000)
    });

    var setNavToAbsolute = function(){
        $('nav').addClass('fixed-nav');
        $('nav ul').addClass('fixed-ul-nav');
        $('nav ul').css({'left': navUlStartLeft + 'px'});
    }

    var setNavToStatic = function(){
        $('nav').removeClass('fixed-nav');
        $('nav ul').removeClass('fixed-ul-nav');
    }

    $('section[data-type="background"]').each(function(){
        var $bgobj = $(this); // assigning the object
        $(window).scroll(function() {
            var yPos = ($(window).scrollTop() / $bgobj.data('speed'));
            var coords = '50% ' + Math.floor(yPos) + 'px';
            $bgobj.css({Top: coords});
        });
    }); 

    $(window).scroll( function() {
        if ($(window).scrollTop() > navStartTop && $('nav.fixed-nav').length == 0){
            setNavToAbsolute();
        }
        if ($(window).scrollTop() < navStartTop && $('nav.fixed-nav').length == 1){
            setNavToStatic();
        }
    });
});
