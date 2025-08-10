

// Global function for navbar dropdown
function toggleTheme() {
    const isDark = document.body.classList.toggle("dark-mode");
    localStorage.setItem("darkMode", isDark.toString());
    updateIcons(isDark);
}

// Update theme icons
function updateIcons(isDark) {
    const icons = document.querySelectorAll('#appearance-icon, .theme-toggle i, [id*="theme"] i');
    icons.forEach(icon => {
        icon.classList.toggle("fa-sun", isDark);
        icon.classList.toggle("fa-moon", !isDark);
    });
}

// Initialize theme on page load
function initializeTheme() {
    const saved = localStorage.getItem("darkMode");
    const prefersDark = saved === null || saved === "true";
    
    document.body.classList.toggle("dark-mode", prefersDark);
    updateIcons(prefersDark);
}

// Setup when DOM loads
document.addEventListener("DOMContentLoaded", () => {
    initializeTheme();
    
    // Sidebar toggle
    const sidebarToggle = document.getElementById("appearance-toggle");
    if (sidebarToggle) {
        sidebarToggle.addEventListener("click", (e) => {
            e.preventDefault();
            toggleTheme();
        });
    }
});

// Initialize immediately if DOM already loaded
if (document.readyState !== "loading") {
    initializeTheme();
}

// Make toggleTheme globally available
window.toggleTheme = toggleTheme;