const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");


/* =========================================
   MOBILE NAVIGATION
========================================= */

if (menuToggle && navMenu) {

    menuToggle.addEventListener("click", () => {

        navMenu.classList.toggle("show");

    });


    const navLinks = navMenu.querySelectorAll("a");


    navLinks.forEach(link => {

        link.addEventListener("click", () => {

            navMenu.classList.remove("show");

        });

    });

}


/* =========================================
   ACTIVE NAVIGATION
========================================= */

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-menu a");


window.addEventListener("scroll", () => {

    let currentSection = "";


    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            currentSection = section.getAttribute("id");

        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");


        if (
            link.getAttribute("href") === `#${currentSection}`
        ) {

            link.classList.add("active");

        }

    });

});

/* =========================================
   PHILOSOPHY SCROLL ANIMATION
========================================= */

const philosophySection = document.querySelector(".philosophy-animation");

if (philosophySection) {

    const philosophyObserver = new IntersectionObserver(
        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    philosophySection.classList.add("philosophy-visible");

                    philosophyObserver.unobserve(philosophySection);

                }

            });

        },
        {
            threshold: 0.25
        }
    );

    philosophyObserver.observe(philosophySection);

}