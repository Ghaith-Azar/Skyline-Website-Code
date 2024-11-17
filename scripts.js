document.addEventListener("DOMContentLoaded", function() {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // Check for saved theme preference
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        body.classList.add(currentTheme);
    }

    // Toggle theme on button click
    themeToggle.addEventListener('click', function() {
        if (body.classList.contains('dark-mode')) {
            body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light-mode');
        } else {
            body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark-mode');
        }
    });
});





document.getElementById("menu-icon").onclick = function() {
    document.getElementById("menu").classList.add("active");
    document.getElementById("menu-icon").classList.add("hidden");
}

document.getElementById("close-menu").onclick = function() {
    document.getElementById("menu").classList.remove("active");
    document.getElementById("menu-icon").classList.remove("hidden");
}









document.addEventListener('DOMContentLoaded', function () {
    const paragraphs = document.querySelectorAll('.intro p');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            } else {
                entry.target.classList.remove('show'); // Remove 'show' when scrolling out
            }
        });
    }, {
        threshold: 0.2 // 20% of the paragraph must be visible to trigger
    });

    paragraphs.forEach(paragraph => {
        observer.observe(paragraph);
    });
});







document.addEventListener('DOMContentLoaded', function () {
    const servicesList = document.querySelector('.services ul');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            } else {
                entry.target.classList.remove('show');
            }
        });
    }, {
        threshold: 0.1 // 10% of the list must be visible to trigger
    });

    observer.observe(servicesList);
});








// FOOTER CAHNGING STYLE CODE

document.getElementById('toggleSwitch').addEventListener('change', function() {
    const footer1 = document.getElementById('footer-style-1');
    const footer2 = document.getElementById('footer-style-2');
    const toggleContainer = document.querySelector('.toggle-container');
    
    if (this.checked) {
        footer1.style.display = 'none';
        footer2.style.display = 'block';
        toggleContainer.style.backgroundColor = '#02e901';  
        
    } else {
        footer1.style.display = 'block';
        footer2.style.display = 'none';
        toggleContainer.style.backgroundColor = '';  // Reset background color when toggler is off
    }
});




















document.addEventListener("DOMContentLoaded", () => {
    const serviceCards = document.querySelectorAll(".our-service-card");
    let isScrolling = false;

    // Detect scrolling
    document.addEventListener("scroll", () => {
        isScrolling = true;
        setTimeout(() => (isScrolling = false), 200); // Reset after scrolling stops
    });

    // Add animation on touch while scrolling
    serviceCards.forEach((card) => {
        card.addEventListener("touchstart", () => {
            if (isScrolling) {
                card.classList.add("hover-effect");
                setTimeout(() => card.classList.remove("hover-effect"), 500); // Optional reset
            }
        });
    });
});
