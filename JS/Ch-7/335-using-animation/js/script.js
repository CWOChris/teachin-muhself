$(function() {
    $('li').on('click', function() {
        $(this).animate({
            opacity: 0.0,
            paddingLeft: '+=80'
        }, 500, function() {
            $(this).remove();
        });
    });
});

// Hot dog, finally one that works correctly.