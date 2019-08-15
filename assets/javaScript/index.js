$(function() {
    $(window).scroll(function () {
       if ($(this).scrollTop() > 50) {
        $(‘header’).addClass(‘displayNone’)
       }
       if ($(this).scrollTop() < 50) {
        $(‘header’).removeClass(‘displayNone’)
       }
    });
 });