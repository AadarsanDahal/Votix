function handleScrollAnimations() {
    const elements = document.querySelectorAll('.team-member');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight * 0.8) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    // Set initial state for animations
    document.querySelectorAll('.team-member').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    });
    
    // Stagger the animations
    setTimeout(() => {
        document.querySelectorAll('.team-member').forEach((element, index) => {
            setTimeout(() => {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }, index * 200);
        });
    }, 500);
});

// Event listener for scroll animations
window.addEventListener('scroll', handleScrollAnimations);