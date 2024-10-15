let currentSlide = 0;

// Slider for main images
function changeSlide(direction) {
    const slides = document.querySelectorAll('.slider img');
    currentSlide += direction;

    // Wrap around the slides
    if (currentSlide >= slides.length) {
        currentSlide = 0;
    } else if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }

    const offset = -currentSlide * 100; // Adjust based on the current slide
    document.querySelector('.slider').style.transform = `translateX(${offset}%)`;
}

// Auto slide every 5 seconds
setInterval(() => {
    changeSlide(1);
}, 5000);

// Product slider functionality
let currentProductSlide = 0;

function moveSlide(direction) {
    const slider = document.querySelector('.productbtn');
    const items = document.querySelectorAll('.category-item');
    const totalItems = items.length;
    const itemsPerView = 4; // Number of items to show at a time

    // Calculate new slide index
    currentProductSlide += direction;
    if (currentProductSlide < 0) currentProductSlide = 0; // Prevent going back
    if (currentProductSlide > totalItems - itemsPerView) currentProductSlide = totalItems - itemsPerView; // Prevent going forward

    // Move the slider
    const offset = currentProductSlide * -((100 / itemsPerView) + 20); // Adjust for margin
    slider.style.transform = `translateX(${offset}%)`;
}

// Image adjustments for specific containers
document.addEventListener('DOMContentLoaded', function() {
    const imgContainers = [
        { selector: '.con6img img', height: '400px' },
        { selector: '.con7img img', height: '400px' },
        { selector: '.con10 img', height: '200px' },
        { selector: '.con13 img', height: '400px' }
    ];

    imgContainers.forEach(container => {
        const img = document.querySelector(container.selector);
        if (img) {
            img.style.width = '100%'; // Full width of the container
            img.style.height = container.height; // Set specific height
            img.style.objectFit = 'cover'; // Ensure the image fills the area
        }
    });

    // Initialize slides
    let slideIndex = 0;

    function showSlide(index) {
        const slides = document.querySelectorAll('.slide');
        slides.forEach((slide, i) => {
            slide.classList.remove('active'); // Hide all slides
            if (i === index) {
                slide.classList.add('active'); // Show the current slide
            }
        });
    }

    function changeSlide(direction) {
        const slides = document.querySelectorAll('.slide');
        slideIndex = (slideIndex + direction + slides.length) % slides.length; // Cycle through slides
        showSlide(slideIndex);
    }

    // Initialize with the first slide
    showSlide(slideIndex);

    // Optional: Automatic slide change every 5 seconds
    setInterval(() => {
        changeSlide(1); // Automatically go to the next slide
    }, 5000);
});

// Horizontal scrolling functionality
function scrollLeft() {
    const container = document.querySelector('.scrolling-content');
    const scrollAmount = 150; // Adjust this value for how much to scroll
    container.scrollBy({
        left: -scrollAmount, // Scroll left
        behavior: 'smooth' // Smooth scrolling
    });
}

function scrollRight() {
    const container = document.querySelector('.scrolling-content');
    const scrollAmount = 150; // Adjust this value for how much to scroll
    container.scrollBy({
        left: scrollAmount, // Scroll right
        behavior: 'smooth' // Smooth scrolling
    });
}

    