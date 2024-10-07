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
        