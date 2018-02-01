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

$("#sec3scroll").click(function() {
    $('html, body').animate({
        scrollTop: $("#section6").offset().top
    }, 1000);
});

$("#sec6scroll").click(function() {
    $('html, body').animate({
        scrollTop: $("#section1").offset().top
    }, 1000);
});

$("#about").click(function() {
    $('html, body').animate({
        scrollTop: $("#section2").offset().top
    }, 1000);
});

$("#projects").click(function() {
    $('html, body').animate({
        scrollTop: $("#section4").offset().top
    }, 1400);
});

$("#contact").click(function() {
    $('html, body').animate({
        scrollTop: $("#section6").offset().top
    }, 1500);
});
