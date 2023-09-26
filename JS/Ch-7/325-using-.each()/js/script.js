$(function() {
    $('li').each(function() {
        var ids = this.id;
        $(this).append(' <span class="order">' + ids + '</span>');
    });
});

// This counts out the number of the list items starting at one with words instead of numerals. Why
// on earth would you do this?