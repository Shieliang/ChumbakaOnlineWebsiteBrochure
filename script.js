// Slideshow functionality
    document.addEventListener('DOMContentLoaded', function() {
        const slides = document.querySelectorAll('.slide');
        const indicators = document.querySelectorAll('.indicator');
        const prevButton = document.querySelector('.prev-button');
        const nextButton = document.querySelector('.next-button');
        let currentSlide = 0;
        let slideInterval;
            
        // Function to show a specific slide
        function showSlide(index) {
        // Hide all slides
        slides.forEach(slide => slide.classList.remove('active'));
        indicators.forEach(indicator => indicator.classList.remove('active'));
                
        // Show the selected slide
        slides[index].classList.add('active');
        indicators[index].classList.add('active');
                
            currentSlide = index;
        }
            
        // Next slide function
        function nextSlide() {
            let nextIndex = (currentSlide + 1) % slides.length;
            showSlide(nextIndex);
            resetAutoAdvance();
        }
            
        // Previous slide function
        function prevSlide() {
            let prevIndex = (currentSlide - 1 + slides.length) % slides.length;
            showSlide(prevIndex);
            resetAutoAdvance();
        }
            
        // Set up indicator clicks
        indicators.forEach(indicator => {
            indicator.addEventListener('click', function() {
                const slideIndex = parseInt(this.getAttribute('data-index'));
                showSlide(slideIndex);
                resetAutoAdvance();
            });
        });
            
            // Set up navigation buttons
            nextButton.addEventListener('click', nextSlide);
            prevButton.addEventListener('click', prevSlide);
            
            // Auto-advance slides
            function startAutoAdvance() {
                slideInterval = setInterval(nextSlide, 5000);
            }
            
            function resetAutoAdvance() {
                clearInterval(slideInterval);
                startAutoAdvance();
            }
            
            // Start the auto-advance
            startAutoAdvance();
            
            // Pause slideshow on hover
            const slideshow = document.querySelector('.slideshow-container');
            slideshow.addEventListener('mouseenter', () => clearInterval(slideInterval));
            slideshow.addEventListener('mouseleave', () => startAutoAdvance());
            
            // Add keyboard navigation
            document.addEventListener('keydown', function(e) {
                if (e.key === 'ArrowLeft') {
                    prevSlide();
                } else if (e.key === 'ArrowRight') {
                    nextSlide();
                }
            });
        });

// Simple animation for value cards when they come into view
        document.addEventListener('DOMContentLoaded', function() {
            const valueCards = document.querySelectorAll('.value-card');
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = 1;
                        entry.target.style.transform = 'translateY(0)';
                    }
                });
            }, { threshold: 0.1 });
            
            valueCards.forEach(card => {
                card.style.opacity = 0;
                card.style.transform = 'translateY(20px)';
                card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                observer.observe(card);
            });
        });

const emailButton = document.getElementById("emailButton");
const emailPopup = document.getElementById("emailPopup");
const closePopup = document.getElementById("closePopup");

let popupOpen = false;

emailButton.addEventListener("click", () => {
    popupOpen = !popupOpen;
    emailPopup.style.display = popupOpen ? "block" : "none";
});

closePopup.addEventListener("click", () => {
    emailPopup.style.display = "none";
    popupOpen = false;
});
