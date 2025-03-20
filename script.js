document.addEventListener("DOMContentLoaded", function () {
    let navlinks = document.getElementById("navlinks");
    let openMenu = document.getElementById("openMenu");
    let closeMenu = document.getElementById("closeMenu");

    openMenu.addEventListener("click", function () {
        navlinks.classList.add("open"); // Show menu
    });

    closeMenu.addEventListener("click", function () {
        navlinks.classList.remove("open"); // Hide menu
    });
});


var typed = new Typed(".input", {
    strings: ["web-Developer", "Full-Stack Developer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});


document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent page reload

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();
    let formStatus = document.getElementById("form-status");

    if (name === "" || email === "" || message === "") {
        formStatus.style.color = "red";
        formStatus.textContent = "All fields are required!";
        return;
    }

    formStatus.style.color = "green";
    formStatus.textContent = "Message Sent Successfully!";

    // Clear Form
    document.getElementById("contact-form").reset();

    // Simulate sending (Replace with actual backend integration)
    setTimeout(() => {
        formStatus.textContent = "";
    }, 3000);
});




document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".navlinks a");
    const sections = document.querySelectorAll("section");
    
    // Smooth Scroll & Active Class Toggle
    navLinks.forEach((link) => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50, // Adjust for navbar height
                    behavior: "smooth",
                });
            }

            // Close mobile menu if open
            document.getElementById("navlinks").classList.remove("active");
        });
    });

    // Highlight Active Section in Navbar
    window.addEventListener("scroll", function () {
        let current = "";
        sections.forEach((section) => {
            const sectionTop = section.offsetTop - 100;
            if (window.scrollY >= sectionTop) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href").substring(1) === current) {
                link.classList.add("active");
            }
        });
    });
});



// About Section




