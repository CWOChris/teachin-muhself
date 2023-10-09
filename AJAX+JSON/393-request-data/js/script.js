$('#selector a').on('click', function(e) {
    e.preventDefault();
    var queryString = 'vote=' + $(this).attr('id');
    $.gte ('vote.php', queryString, function(data) {
        $('#selector').html(data);
    });
});