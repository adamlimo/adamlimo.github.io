$(document).ready(function(){
    $('.fleet-carousel').slick({
        dots: true,          // Show dots for navigation
        infinite: true,      // Infinite scrolling
        speed: 500,          // Transition speed
        slidesToShow: 1,     // Number of slides to show
        slidesToScroll: 1,   // Number of slides to scroll
        arrows: true,        // Show navigation arrows
    });
});
