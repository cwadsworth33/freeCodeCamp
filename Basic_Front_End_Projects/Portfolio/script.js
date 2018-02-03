$("#sec1scroll").click(function() {
    $('html, body').animate({
        scrollTop: $("#section2").offset().top
    }, 1200);
});

$("#sec2scroll").click(function() {
    $('html, body').animate({
        scrollTop: $("#section4").offset().top
    }, 1200);
});

$("#sec3scroll").click(function() {
    $('html, body').animate({
        scrollTop: $("#section6").offset().top
    }, 1200);
});

$("#sec6scroll").click(function() {
    $('html, body').animate({
        scrollTop: $("#section1").offset().top
    }, 1700);
});

$("#about").click(function() {
    $('html, body').animate({
        scrollTop: $("#section2").offset().top
    }, 1200);
});

$("#projects").click(function() {
    $('html, body').animate({
        scrollTop: $("#section4").offset().top
    }, 1700);
});

$("#contact").click(function() {
    $('html, body').animate({
        scrollTop: $("#section6").offset().top
    }, 1700);
});
