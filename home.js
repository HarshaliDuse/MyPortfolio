document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".navbar a");
    const sections = document.querySelectorAll("section");

    function setActiveLinkOnScroll() {
        let scrollPosition = window.scrollY + 200; // Adding an offset to trigger early

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionBottom = sectionTop + section.offsetHeight;

            // Check if the scroll position is within the section's bounds
            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                const currentId = section.getAttribute("id");

                // Remove active class from all links
                navLinks.forEach(link => link.classList.remove("active"));

                // Add active class to the link corresponding to the current section
                const activeLink = document.querySelector(`.navbar a[href="#${currentId}"]`);
                if (activeLink) {
                    activeLink.classList.add("active");
                }
            }
        });
    }

    // Trigger scroll detection on scroll
    window.addEventListener("scroll", setActiveLinkOnScroll);

    // Trigger initial check on page load
    setActiveLinkOnScroll();

    // Add click event listener to each navbar link
    navLinks.forEach(link => {
        link.addEventListener("click", (event) => {
            // Remove 'active' class from all links
            navLinks.forEach(link => link.classList.remove("active"));
            // Add 'active' class to the clicked link
            event.target.classList.add("active");
        });
    });
});



document.addEventListener("DOMContentLoaded", () => {
    const workSection = document.querySelector(".work"); // Select the Work section
    const cards = document.querySelectorAll(".card"); // Select all cards in the section
    
    const observerOptions = {
        root: null, // Use viewport as root
        rootMargin: "0px",
        threshold: 0.5, // Trigger when 50% of the Work section is in view
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                cards.forEach((card, index) => {
                    setTimeout(() => {
                        card.classList.add("active");
                    }, index * 200); // Stagger animations with delay
                });
            } else {
                // Optionally remove 'active' class when not in view
                cards.forEach(card => card.classList.remove("active"));
            }
        });
    }, observerOptions);

    observer.observe(workSection); // Start observing the Work section
});




document.addEventListener("DOMContentLoaded", () => {
    const aboutSection = document.querySelector(".about");
    const secondStadium = aboutSection.querySelector(".second-stadium");
    const thirdStadium = aboutSection.querySelector(".third-stadium");
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // When the about section is visible
            secondStadium.style.display = "block"; // Make visible
            thirdStadium.style.display = "block"; // Make visible
            secondStadium.style.animation = "popOut 1.2s ease-out forwards"; // Trigger animation
            thirdStadium.style.animation = "popOut 1.2s ease-out forwards"; // Trigger animation
          } else {
            // When the about section is not visible
            secondStadium.style.display = "none"; // Hide
            thirdStadium.style.display = "none"; // Hide
          }
        });
      },
      {
        root: null, // Observe the entire viewport
        threshold: 0.5, // Trigger when 50% of the section is visible
      }
    );
  
    observer.observe(aboutSection);
  });
  
  
