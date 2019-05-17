$(document).ready(function () {

    // $(".navbar-brand").hide();
    $("#projects").hide();

    // Scroll effect
    // interferes with nav background behaviour
    /*$(".navbar a, .page-footer a").click(function () {
        $("body,html").animate({
            scrollTop: $("#" + $(this).data('value')).offset().top
        }, 1000)

    });*/

    // Add smooth scrolling to all links
    $("a").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });


    //Change nav background and show Home when scrolling
    // $(document).scroll(function () {
    //     var $nav = $(".fixed-top");
    //     $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    //     if($(this).scrollTop() > $nav.height()) {
    //         $(".navbar-brand").fadeIn();
    //     } else {
    //         $(".navbar-brand").fadeOut();
    //     }
    // });

    $(".work-a").click( function() {
        $("#work").show();
        $("#projects").hide();
    });

    $(".project-a").click( function() {
        $("#work").hide();
        $("#projects").show();
    });

})