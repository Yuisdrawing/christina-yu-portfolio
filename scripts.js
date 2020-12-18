// in drawing:
    // messages pop up on hover on:
        // coffee mug: Barista
        // paintbrushes: Painter
        // posters: Designer
    // monitor displays a message on hover: Front-end web developer



// hide close icons, links, and dark overlay on document ready
$(document).ready(function() {
    $('.closeIcon').first().hide();
    $('.overheadNavLinks').first().hide();
    $('.overheadHeader').removeClass('overlay');
});

// burger icon displays initially hidden elements onClick
// then burger icon hides as well
// then reappears when close icon is clicked
$('.burgerIcon').on('click', () => {
    $('.burgerIcon').hide();
    $('.closeIcon').show();
    $('.overheadNavLinks').show();
    $('.overheadHeader').addClass('overlay');
})

$('.closeIcon').on('click', () => {
    $('.burgerIcon').show();
    $('.closeIcon').first().hide();
    $('.overheadNavLinks').first().hide();
    $('.overheadHeader').removeClass('overlay');
})