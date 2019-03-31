$(document).ready(function () {

    $(".navbar-brand").hide();
    $("#project").hide();

    // Scroll effect
    // interferes with nav background behaviour
    /*$(".navbar a, .page-footer a").click(function () {
        $("body,html").animate({
            scrollTop: $("#" + $(this).data('value')).offset().top
        }, 1000)

    });*/

    // Header Image
    $('.header').height($(window).height());
    window.onresize = function () { // re-size accordingly
        $('.header').height($(window).height());
    };

    //Change nav background and show Home when scrolling
    $(document).scroll(function () {
        var $nav = $(".fixed-top");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
        if($(this).scrollTop() > $nav.height()) {
            $(".navbar-brand").fadeIn();
        } else {
            $(".navbar-brand").fadeOut();
        }
    });

    $(".work-btn").click( function() {
        console.log("work button works");
        $("#work").show();
        $("#project").hide();
    });

    $(".project-btn").click( function() {
        console.log("project button works");
        $("#work").hide();
        $("#project").show();
    });

})