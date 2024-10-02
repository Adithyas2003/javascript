function search() {
    const query = document.getElementById('search-input').value;
    if (query) {
        alert(`Searching for: ${query}`);
        // You can implement actual search functionality here
    } else {
        alert('Please enter a search term.');
    }
}

    const productSlider = document.querySelector('.product-slider');

    let startX;
    let scrollLeft;

    productSlider.addEventListener('mousedown', (e) => {
        startX = e.pageX - productSlider.offsetLeft;
        scrollLeft = productSlider.scrollLeft;
        productSlider.addEventListener('mousemove', handleMouseMove);
    });

    productSlider.addEventListener('mouseup', () => {
        productSlider.removeEventListener('mousemove', handleMouseMove);
    });

    productSlider.addEventListener('mouseleave', () => {
        productSlider.removeEventListener('mousemove', handleMouseMove);
    });

    function handleMouseMove(e) {
        const x = e.pageX - productSlider.offsetLeft;
        const walk = (x - startX) * 2; // Adjust scroll speed
        productSlider.scrollLeft = scrollLeft - walk;
    }

    // Touch events for mobile
    let startTouch;

    productSlider.addEventListener('touchstart', (e) => {
        startTouch = e.touches[0].clientX;
        scrollLeft = productSlider.scrollLeft;
    });

    productSlider.addEventListener('touchmove', (e) => {
        const x = e.touches[0].clientX;
        const walk = (x - startTouch) * 2; // Adjust scroll speed
        productSlider.scrollLeft = scrollLeft - walk;
    });

// script.js

// Function to toggle the visibility of the footer
function toggleFooter() {
    const footer = document.querySelector('.footer');
    if (footer.style.display === 'none' || footer.style.display === '') {
        footer.style.display = 'block'; // Show the footer
    } else {
        footer.style.display = 'none'; // Hide the footer
    }
}

// Event listener for a button to toggle footer visibility
document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.createElement('button');
    toggleButton.innerText = 'Toggle Footer';
    toggleButton.style.margin = '20px';
    
    // Add event listener to the button
    toggleButton.addEventListener('click', toggleFooter);

    // Append the button to the body or another suitable element
    document.body.insertBefore(toggleButton, document.body.firstChild);
});
function openMap() {
    window.open("https://www.google.com/maps/search/?api=1&query=Kureekkadu,+Ernakulam,+Kerala,+India", "_blank");
}
const scrollLeftBtn = document.getElementById('scroll-left');
const scrollRightBtn = document.getElementById('scroll-right');
const slider = document.querySelector('.category-slider');

scrollLeftBtn.addEventListener('click', () => {
    slider.scrollBy({
        left: -slider.clientWidth, // Scroll left by the width of the visible area
        behavior: 'smooth'
    });
});

scrollRightBtn.addEventListener('click', () => {
    slider.scrollBy({
        left: slider.clientWidth, // Scroll right by the width of the visible area
        behavior: 'smooth'
    });
});
