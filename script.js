// NAVBAR ACTIVE LINK
const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(function(link) {
    link.addEventListener("click", function() {
        navLinks.forEach(function(nav) {
            nav.classList.remove("active");
        });

        this.classList.add("active");

        // Tutup menu navbar pada layar mobile
        const navbarMenu = document.getElementById("navbarMenu");

        if (navbarMenu.classList.contains("show")) {
            const bsCollapse = bootstrap.Collapse.getOrCreateInstance(navbarMenu);
            bsCollapse.hide();
        }
    });
});


// SCROLL ANIMATION
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", function() {
    let currentSection = "";

    sections.forEach(function(section) {
        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            currentSection = section.getAttribute("id");
        }
    });

    navLinks.forEach(function(link) {
        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + currentSection) {
            link.classList.add("active");
        }
    });
});


// CONTACT EMAIL
const emailLinks = document.querySelectorAll('a[href^="mailto:"]');

emailLinks.forEach(function(link) {
    link.addEventListener("click", function() {
        console.log("Opening email application...");
    });
});


// CONSOLE MESSAGE
console.log("Welcome to Ayla's Personal Portfolio!");