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
