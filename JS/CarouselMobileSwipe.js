var carousel;
$(document).ready(function () {
    carousel = $(".carousel-item");
});


$('.carousel').each(function () {
    var $carousel = $(this);
    var hammertime = new Hammer(this, {
        recognizers: [
            [Hammer.Swipe, {direction: Hammer.DIRECTION_HORIZONTAL}]
        ]
    });
    hammertime.on('swipeleft', function () {
        $carousel.carousel('next');
    });
    hammertime.on('swiperight', function () {
        $carousel.carousel('prev');
    });
});