$('header').addClass('headline');
$('li:lt(3)').hide().fadeIn(1500);
$('li').on('click', function() {
    $(this).remove();
});

//this awkard grouping of functions causes the first 3 list items in class hot fade in over 1.5 sec.