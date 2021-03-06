// in drawing:
// messages pop up on hover on:
// coffee mug: Barista
// paintbrushes: Painter
// posters: Designer
// monitor displays a message on hover: Front-end web developer



// hide close icons, links, and dark overlay on document ready
$(document).ready(function () {
    $('.closeIcon').first().hide();
    // $('.firstIntroGroup').addClass('noDisplay');
});

const typed = new Typed('#typed', {
    stringsElement: '#typed-strings',
    typeSpeed: 45
});



// burger icon displays initially hidden elements onClick
// then burger icon hides as well
// then reappears when close icon is clicked

$('.burgerIcon').click(function () {
    $('.overheadHeader').addClass('open');
    $('.burgerIcon').hide();
    $('.closeIcon').show();

    $('.navLinks').on('click', () => {
        $('.overheadHeader').removeClass('open');
        $('.closeIcon').hide();
        $('.burgerIcon').show();
    })
    $('.closeIcon').on('click', () => {
        $('.overheadHeader').removeClass('open');
        $('.closeIcon').hide();
        $('.burgerIcon').show();
    })
});

// sidebar: images changing on hover
$('.topIcon').hover(function () {
    $('.topIcon').attr('src', 'assets/navIcons/topIcon2.png');
}, function () {
    $('.topIcon').attr('src', 'assets/navIcons/topIcon.png');
});
$('.projectsIcon').hover(function () {
    $('.projectsIcon').attr('src', 'assets/navIcons/projectsIcon2.png');
}, function () {
    $('.projectsIcon').attr('src', 'assets/navIcons/projectsIcon.png');
});
$('.introIcon').hover(function () {
    $('.introIcon').attr('src', 'assets/navIcons/introIcon2.png');
}, function () {
    $('.introIcon').attr('src', 'assets/navIcons/introIcon.png');
});
$('.contactIcon').hover(function () {
    $('.contactIcon').attr('src', 'assets/navIcons/contactIcon2.png');
}, function () {
    $('.contactIcon').attr('src', 'assets/navIcons/contactIcon.png');
});


// on drawing page: change .gif file for blinking image of me
$('.me').hover(function () {
    $('.me').attr('src', 'assets/blinkForward/blinkForward.gif');
}, function() {
        $('.me').attr('src', 'assets/blinkSideEye/blinkSide2.gif');
});



// // changing mobileMe gif on click

// const mobileMe = document.getElementById('mobileMe');

// mobileMe.addEventListener('click', function() {
//     changeImage();
// });

// function changeImage() {
//     if (mobileMe.src = 'assets/blinkSideEye/blinkSide2.gif') {
//         mobileMe.src = 'assets/blinkForward/blinkForward.gif';
//     } else {
//         mobileMe.src = 'assets/blinkSideEye/blinkSide2.gif';
//     }
// }
