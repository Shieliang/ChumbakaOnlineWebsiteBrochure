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
            if (currentSlide < slides.length - 1) {
                showSlide(currentSlide + 1);
            } else {
                showSlide(0); // stay on last slide
            }
            resetAutoAdvance();
        }

        function prevSlide() {
            if (currentSlide > 0) {
                showSlide(currentSlide - 1);
            } else {
                showSlide(slide.length); // stay on first slide
            }
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

// Header "Contact Us" link triggers popup
document.addEventListener("DOMContentLoaded", () => {
  const contactLink = document.getElementById("contactLink");
  if (contactLink) {
    contactLink.addEventListener("click", (e) => {
      e.preventDefault(); // prevent jump
      popupOpen = true;
      emailPopup.style.display = "block";
    });
  }
});

// footer "Contact Us" link triggers popup
document.addEventListener("DOMContentLoaded", () => {
  const contactLink = document.getElementById("contactlink");
  if (contactLink) {
    contactLink.addEventListener("click", (e) => {
      e.preventDefault(); // prevent jump
      popupOpen = true;
      emailPopup.style.display = "block";
    });
  }
});

// For carousel course cards
document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.querySelector(".carousel");
  const cards = document.querySelectorAll(".course-card");
  const prevBtn = document.querySelector(".carousel-btn.prev");
  const nextBtn = document.querySelector(".carousel-btn.next");

  let currentIndex = 0;
  let autoplayInterval;

  function setActiveCard(index) {
    if (index < 0) index = cards.length - 1;
    if (index >= cards.length) index = 0;
    currentIndex = index;

    cards.forEach(card => card.classList.remove("active"));
    const activeCard = cards[currentIndex];
    activeCard.classList.add("active");

    const carouselCenter = carousel.offsetWidth / 2;
    const cardCenter = activeCard.offsetLeft + activeCard.offsetWidth / 2;
    const scrollLeft = cardCenter - carouselCenter;

    carousel.scrollTo({ left: scrollLeft, behavior: "smooth" });
  }

  function startAutoplay() {
    autoplayInterval = setInterval(() => {
      setActiveCard(currentIndex + 1);
    }, 5000); // every 5s
  }

  function stopAutoplay() {
    clearInterval(autoplayInterval);
  }

  prevBtn.addEventListener("click", () => {
    stopAutoplay();
    setActiveCard(currentIndex - 1);
    startAutoplay();
  });

  nextBtn.addEventListener("click", () => {
    stopAutoplay();
    setActiveCard(currentIndex + 1);
    startAutoplay();
  });

  setActiveCard(0);
  startAutoplay();

  // Expand / collapse
  cards.forEach(card => {
    const learnBtn = card.querySelector(".learn-more");
    const closeBtn = card.querySelector(".close-card");

    if (learnBtn) {
      learnBtn.addEventListener("click", e => {
        e.stopPropagation();
        cards.forEach(c => c.classList.remove("expanded"));
        if (card.classList.contains("active")) {
          card.classList.add("expanded");
        }
        stopAutoplay(); // stop while expanded
      });
    }

    if (closeBtn) {
      closeBtn.addEventListener("click", e => {
        e.stopPropagation();
        card.classList.remove("expanded");
        startAutoplay(); // resume autoplay
      });
    }
  });

  // Collapse when clicking outside expanded card
  document.addEventListener("click", e => {
    if (!e.target.closest(".course-card")) {
      cards.forEach(c => c.classList.remove("expanded"));
      startAutoplay();
    }
  });
});

document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.getElementById("contactForm");

    contactForm.addEventListener("submit", function(e) {
        e.preventDefault();
        popupOpen = false

        emailjs.sendForm("service_vnu755m", "template_ebl27oe", this)
            .then(() => {
                alert("Message sent successfully! 🎉");
                contactForm.reset();
                document.getElementById("emailPopup").style.display = "none"; // close popup
            }, (error) => {
                console.error("EmailJS Error:", error);
                alert("Oops! Something went wrong, please try again.");
            });
    });
});



