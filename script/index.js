// Initialize Animate On Scroll
AOS.init();

// Preloader
$(document).ready(function(){
    $(".preloader").fadeOut(3000);
});

// get year footer
const getYear = new Date();
document.getElementById('year').innerHTML = getYear.getFullYear();
