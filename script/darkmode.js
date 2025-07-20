document.addEventListener("DOMContentLoaded", () => {
    const toggleItem = document.getElementById("appearance-toggle");
    const icon = document.getElementById("appearance-icon");

    // Load saved preference or default to dark mode
    const saved = localStorage.getItem("darkMode");
    const prefersDark = saved === null || saved === "true";

    if (prefersDark) {
        document.body.classList.add("dark-mode");
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
    } else {
        document.body.classList.remove("dark-mode");
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
    }

    // Handle toggle click
    toggleItem.addEventListener("click", () => {
        const isDark = document.body.classList.toggle("dark-mode");
        localStorage.setItem("darkMode", isDark);

        // Update icon
        icon.classList.toggle("fa-sun", isDark);
        icon.classList.toggle("fa-moon", !isDark);
    });
});