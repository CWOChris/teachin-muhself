$(function() {
    $('li:contains("pine')').text('almonds');
    $('li.hot').html(function() {
        return '<em>' + $(this).text() + '</em>';
    });
    $('li#one').remove();
});


// Line 2, when copied from the book, does not function.  But in the example page it removes fresh
// figs and replaces pine nuts with almonds.