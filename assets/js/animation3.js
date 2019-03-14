$(window).scroll(function() {
    if ($(this).scrollTop() >= 600) {        // If page is scrolled more than 50px
        $('#scrollUp').fadeIn(200);    // Fade in the arrow
    } else {
        $('#scrollUp').fadeOut(200);   // Else fade out the arrow
    }
});
$('#scrollUp').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 500);
});

