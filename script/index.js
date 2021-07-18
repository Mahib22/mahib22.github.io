// Initialize Animate On Scroll
AOS.init();

// Custom Cursor
options = {
        "cursorOuter": "circle-basic",
        "hoverEffect": "circle-move",
        "hoverItemMove": false,
        "defaultCursor": false,
        "outerWidth": 30,
        "outerHeight": 30
    };
magicMouse(options);

// Preloader
$(document).ready(function(){
    $(".preloader").fadeOut(3000);
});

// get year footer
const getYear = new Date();
document.getElementById('year').innerHTML = getYear.getFullYear();
