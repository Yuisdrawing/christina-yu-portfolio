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
    typeSpeed: 80
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

// const me = document.getElementsByClassName('me')[0];


// me.onclick = function () {
//     if ($(window).width() > 1200) {
//         me.src = "assets/blinkForward/blinkForward.gif";
//         let start = Date.now();
//         let timer = setInterval(function () {
//             let timePassed = Date.now() - start;
//             me.style.right = timePassed / 1 + 'px';
//             if (timePassed > 700) clearInterval(timer);
//         });
//     }
//     else if (me.src = "assets/blinkForward/blinkForward.gif") {
//         me.display = 'block'
//         me.onClick = null;
//     };
// }



const $element = $('.me');
const imagePath = '/images';
const totalFrames = 18;
const animationDuration = 1300;
const timePerFrame = animationDuration / totalFrames;
let timeWhenLastUpdate;
let timeFromLastUpdate;
let frameNumber = 1;

function step(startTime) {
    if (!timeWhenLastUpdate) timeWhenLastUpdate = startTime;

    timeFromLastUpdate = startTime - timeWhenLastUpdate;

    if (timeFromLastUpdate > timePerFrame) {
        $element.attr('src', imagePath + `/Eye-${frameNumber}.svg`);
        timeWhenLastUpdate = startTime;

        if (frameNumber >= totalFrames) {
            frameNumber = 1;
        } else {
            frameNumber = frameNumber + 1;
        }
    }

    requestAnimationFrame(step);
}