$(document).ready(function(){

    // Scroll effect
    $(".navbar a, .page-footer a").click(function(){
        $("body,html").animate({
            scrollTop:$("#" + $(this).data('value')).offset().top
        },1000)

    });

    // Header Image
    $('.header').height($(window).height());
    window.onresize = function() { // re-size accordingly
        $('.header').height($(window).height());
    };
})