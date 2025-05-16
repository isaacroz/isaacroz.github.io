document.addEventListener('DOMContentLoaded', function() {
    // Update year in footer
    const currentYear = document.getElementById('current-year');
    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }
});
