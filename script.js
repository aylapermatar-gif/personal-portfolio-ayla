
// =========================
// MOBILE NAVIGATION
// =========================

const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");
const navLinks = document.querySelectorAll(".nav-link");

// Membuka dan menutup menu
menuToggle.addEventListener("click", function () {

    navMenu.classList.toggle("show");

    const isOpen = navMenu.classList.contains("show");

    menuToggle.setAttribute("aria-expanded", isOpen);

    menuToggle.innerHTML = isOpen ? "&times;" : "☰";
});

// Menutup menu setelah link diklik
navLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        navMenu.classList.remove("show");

        menuToggle.setAttribute("aria-expanded", "false");

        menuToggle.innerHTML = "☰";

    });

});


// =========================
// ACTIVE NAVIGATION
// =========================

const sections = document.querySelectorAll("main section");

window.addEventListener("scroll", function() {

    let current = "";

    sections.forEach(function(section) {

        const sectionTop = section.offsetTop - 120;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(function(link) {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});


// =========================
// CONTACT FORM
// =========================

const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !subject || !message) {

        formStatus.textContent = "Mohon lengkapi semua data!";
        return;

    }

    formStatus.textContent =
        "Terima kasih, " + name +
        "! Formulir berhasil diperiksa. Silakan hubungi saya melalui email untuk mengirim pesan.";

    contactForm.reset();

});
