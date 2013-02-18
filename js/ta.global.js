function mycarousel_initCallback(carousel) {
    carousel.buttonNext.bind('click', function() {
        carousel.startAuto(0);
    });

    carousel.buttonPrev.bind('click', function() {
        carousel.startAuto(0);
    });

    carousel.clip.hover(function() {
        carousel.stopAuto();
    }, function() {
        carousel.startAuto();
    });

    $('.jcarousel-container').addClass('two-by');

};

$(document).ready(function() {
    $('#mycarousel').jcarousel({
        wrap: 'circular',
        scroll: 1,
        auto: 2,
        initCallback: mycarousel_initCallback
    });
    $('#contentWrapper .videoKeyLink').click(function (event) {
        event.stopImmediatePropagation();
        event.preventDefault();
        var clickedObj = $(this);
        $('#videoIframe').attr('src', '');
        vlpSettings.vtbLoaded = false;
        vlpSettings.detachedObj = $('.cruiseHeading #videoWrapper').detach();
        $.colorbox({ 'transition': 'none', 'scrolling': false, 'slideshow': false, 'slideshowAuto': false, 'opacity': 0.50, 'current': 'Video: {current} of {total}', 'innerWidth': 700, 'innerHeight': 360, 'html': GetColorboxSrcVideo(clickedObj.attr('href')), onComplete: function () {
        }, onClosed: function () {
            if (vlpSettings.detachedObj) {
                $('#aExpandVideo').after(vlpSettings.detachedObj);
                vlpSettings.detachedObj = null;
            }
        }
        });
    });
});
