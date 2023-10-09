$('#exchangerates').append('<div id="rates"></div><div id="reload"></div>');
function loadRates(){
    $.getJSON('data/rates.json')
    .done( function(data){
        var d = new Date();
        var hrs = d.getHours();
        var mins = d.getMinutes();
        var msg = '<h2>Exchange Rates</h2>';
        $.each(data, function(key, val){
            msg += '<div class="' + key + '">' + key + ': ' + val + '</div>';
        });
        msg += '<br>Last update: ' + hrs + ':' + mins + '<br>';
        $('#rates').html(msg);
    })
    .fail( function(){
        $('#rates').text('Sorry, we cannot load rates.');
    })
    .always( function(){
        var reload = '<a id="refresh" href="#">';
        reload += '<img src=".assets/img/refresh.png" alt="refresh" /></a>';
        $('#reload').html(reload);
        $('#refresh').on('click', function(e){
            e.preventDefault();
            loadRates();
        });
    });
}