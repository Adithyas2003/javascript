let currentSlide = 0;

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

        // Optional: Auto slide every 5 seconds
        setInterval(() => {
            changeSlide(1);
        },5000);
        let currentSlide1 = 0;

        function moveSlide(direction) {
            const slider = document.querySelector('.productbtn');
            const items = document.querySelectorAll('.category-item');
            const totalItems = items.length;
            const itemsPerView = 4; // Number of items to show at a time
        
            // Calculate new slide index
            currentSlide += direction;
            if (currentSlide < 0) currentSlide = 0; // Prevent going back
            if (currentSlide > totalItems - itemsPerView) currentSlide = totalItems - itemsPerView; // Prevent going forward
        
            // Move the slider
            const offset = currentSlide * -((100 / itemsPerView) + 20); // Adjust for margin
            slider.style.transform = `translateX(${offset}%)`;
        }
      
    document.addEventListener('DOMContentLoaded', function() {
        const img = document.querySelector('.con6img img');

        if (img) {
            // Set desired width and height
            img.style.width = '100%'; // Full width of the container
            img.style.height = '400px'; // Set a specific height

            // Optionally, maintain aspect ratio by setting height to auto
            img.style.objectFit = 'cover'; // Cover ensures the image fills the area
        }
    });

    document.addEventListener('DOMContentLoaded', function() {
        // Set image properties in the "con7img" container
        
        const img = document.querySelector('.con7img img');
    
        if (img) {
            img.style.width = '100%'; // Full width of the container
            img.style.height = '400px'; // Set a specific height
            img.style.objectFit = 'cover'; // Ensure the image fills the area
        }
    
        let currentSlide = 0;

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
    currentSlide = (currentSlide + direction + slides.length) % slides.length; // Cycle through slides
    showSlide(currentSlide);
}

// Initialize with the first slide
showSlide(currentSlide);

// Optional: Automatic slide change every 5 seconds
setInterval(() => {
    changeSlide(1); // Automatically go to the next slide
}, 5000);
    });