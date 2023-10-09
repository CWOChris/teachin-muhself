$(function(){
    var $list. $newItemForm, $newItemButton;
    var item = ''; // item is an empty string
    $list = $('ul'); // Cache the unordered list
    $newItemForm = $('#newItemForm'); // Cache form to add new items
    $newItemButton = $('#newItemButton'); // Cache button to show form
    $('li').hide().each(function(index) { // Hide list items
        $(this).delay(450 * index).fadeIn(1600); // Then fade them in
    });
    // Item counter
    function updateCount() {
        var items = $('li[class!=complete]').length; // Number of items in list
        $('#counter').text(items); // Added into counter circle
    }
    updateCount(); // Call the function
    // Setup form for new items
    $newItemButton.show(); // Show the button
    $newItemForm.hide(); // Hide the form
    $('#showForm').on('click', function() { // When click on add item button
        $newItemButton.hide(); // Hide the button
        $newItemForm.show(); // Show the form
    });