$(function() {
    var $listItems, itemStatus, eventType;

    $('ul').on(
        'click mouseover',
        ':not(#four)',
        {status: 'important'},
        function(e) {
            $listItems = $('li');
            itemStatus = e.data.status;
            eventType = e.type;

            $listItems.children('span').remove();
            $(this).append('<span class="date">' + eventType + ' ' + itemStatus + '</span>');
        }
    );

}); // end ready