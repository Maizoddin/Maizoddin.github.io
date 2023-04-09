// onload image height 100%

$(function () {
    $(window).on("load resize", function () {
        $(".fill-screen").css("height", window.innerHeight);
    });

    
    // scrollspy
    $('body').scrollspy({
        target: '.navbar',
        offset: 150
    });

    // animateScroll
    $('nav a').bind('click', function(){
        $($(this).attr('href')).animatescroll({scrollSpeed: 3000, padding:50});
        event.preventDefault();
    });

// Progress bar
    $('.progress-bar').each(function() {
        var bar_value = $(this).attr('aria-valuenow') + '%';                
        $(this).animate({ width: bar_value }, { duration: 2000, easing: 'easeOutCirc' });
    });

})