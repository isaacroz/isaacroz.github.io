document.addEventListener('DOMContentLoaded', () => {
  // Set current year
  document.getElementById('current-year')?.textContent = new Date().getFullYear();
  
  // Set active nav link
  const currentPage = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('nav a').forEach(link => {
    if (link.getAttribute('href') === currentPage) {
      link.classList.add('active');
    }
  });
  
  // Handle button clicks
  document.addEventListener('click', (e) => {
    if (e.target.closest('button a')) {
      e.preventDefault();
      location.href = e.target.closest('a').href;
    }
  });
  
  // Register service worker
  if ('serviceWorker' in navigator && location.protocol === 'https:') {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js');
    });
  }
});