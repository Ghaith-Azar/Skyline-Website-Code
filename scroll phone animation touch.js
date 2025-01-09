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





document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector(".button");
    let isScrolling = false;

    // Detect scrolling
    document.addEventListener("scroll", () => {
        isScrolling = true;
        setTimeout(() => (isScrolling = false), 200); // Reset after scrolling stops
    });

    // Add animation on touch while scrolling
    button.addEventListener("touchstart", () => {
        if (isScrolling) {
            button.classList.add("hover-effect");
        }
    });
});





document.addEventListener('DOMContentLoaded', () => {
    // Add scroll-triggered animation on vision items
    const visionItems = document.querySelectorAll('.vision-item');

    function checkVisibility() {
        const windowHeight = window.innerHeight;
        visionItems.forEach(item => {
            const rect = item.getBoundingClientRect();
            if (rect.top <= windowHeight - 150) {
                item.classList.add('in-view');
            }
        });
    }

    checkVisibility(); // Run on initial load

    // Trigger animation on scroll
    window.addEventListener('scroll', checkVisibility);
});


















document.addEventListener("DOMContentLoaded", () => {
    let isScrolling = false;

    // Detect scrolling
    document.addEventListener("scroll", () => {
        isScrolling = true;
        setTimeout(() => (isScrolling = false), 200); // Reset after scrolling stops
    });

    // Add touchstart event listener to all elements
    document.querySelectorAll("*").forEach((element) => {
        element.addEventListener("touchstart", () => {
            if (isScrolling) {
                element.classList.add("hover-effect");

                // Remove the hover-effect class after a short delay
                setTimeout(() => element.classList.remove("hover-effect"), 500);
            }
        });
    });
});
