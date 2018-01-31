$("#sec1scroll").click(function() {
    $('html, body').animate({
        scrollTop: $("#section2").offset().top
    }, 1000);
});

$("#sec2scroll").click(function() {
    $('html, body').animate({
        scrollTop: $("#section4").offset().top
    }, 1000);
});
