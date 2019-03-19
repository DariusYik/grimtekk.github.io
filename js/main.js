$(document).ready(function(){

    // Scroll effect
    $(".navbar a").click(function(){
        $("body,html").animate({
            scrollTop:$("#" + $(this).data('value')).offset().top
        },1000)

    });

    // Header Image
    $('.header').height($(window).height());
})