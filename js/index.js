$(document).ready(function() {
    $('a').on('click', function(event) {
        if (this.hash !== '') {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function() {
                window.location.hash = hash;
            });
        }
    });
});

function init() {
    window.addEventListener('scroll', function(e) {
        var distanceY = window.pageYOffset || document.documentElement.scrollTop,
            shrinkOn = 50,
            header = document.querySelector('header');
        if (distanceY > shrinkOn) {
            $('header').addClass('smaller');
        } else {
            if ($('header').hasClass('smaller')) {
                $('header').removeClass('smaller');
            }
        }
    });
}
window.onload = init();
$(window).on('resize', function() {
    var header_height = $('header').height();
    $('.anchor').css('padding-top', header_height);
});
