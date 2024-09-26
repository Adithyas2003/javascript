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

