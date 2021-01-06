// in drawing:
    // messages pop up on hover on:
        // coffee mug: Barista
        // paintbrushes: Painter
        // posters: Designer
    // monitor displays a message on hover: Front-end web developer



// hide close icons, links, and dark overlay on document ready
$(document).ready(function() {
    $('.closeIcon').first().hide();
    $('.hoverBubble').addClass('visuallyHidden');
    $('.infoBubble').addClass('visuallyHidden');
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



$('.me').hover(
    function () {
        $('.me').attr('src', 'assets/blinkForward/blinkForward.gif');
        $('.infoBubble').removeClass('visuallyHidden');
    },
    function () {
        $('.me').attr('src', 'assets/blinkSideEye/blinkSide2.gif');
        $('.infoBubble').addClass('visuallyHidden');
    }
);
$('.drawingMediums').hover(
    function () {
        $('.drawingMediums').attr('src', 'assets/traits/drawingMediums2.gif');
    },
    function () {
        $('.drawingMediums').attr('src', 'assets/traits/drawingMediums.png');
    }
);







$('#introNav').hover(
    function () {
        $('.introBubble').removeClass('visuallyHidden');
        $('.introIcon').attr('src', 'assets/navIcons/introIcon2.png');
    },
    function () {
        $('.introBubble').addClass('visuallyHidden');
        $('.introIcon').attr('src', 'assets/navIcons/introIcon.png');
    }
);

$('#skillsNav').hover(
    function () {
        $('.skillsBubble').removeClass('visuallyHidden');
        $('.skillsIcon').attr('src', 'assets/navIcons/skillsIcon2.png');
    },
    function () {
        $('.skillsBubble').addClass('visuallyHidden');
        $('.skillsIcon').attr('src', 'assets/navIcons/skillsIcon.png');
    }
);

$('#projectsNav').hover(
    function () {
        $('.projectsBubble').removeClass('visuallyHidden');
        $('.projectsIcon').attr('src', 'assets/navIcons/projectsIcon2.png');
    },
    function () {
        $('.projectsBubble').addClass('visuallyHidden');
        $('.projectsIcon').attr('src', 'assets/navIcons/projectsIcon.png');
    }
);

$('#contactNav').hover(
    function () {
        $('.contactBubble').removeClass('visuallyHidden');
        $('.contactIcon').attr('src', 'assets/navIcons/contactIcon2.png');
    },
    function () {
        $('.contactBubble').addClass('visuallyHidden');
        $('.contactIcon').attr('src', 'assets/navIcons/contactIcon.png');
    }
);





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