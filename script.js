// Simple carousel functionality for dots
document.addEventListener('DOMContentLoaded', () => {
    const dots = document.querySelectorAll('.dot');
    
    for (const dot of dots) {
      dot.addEventListener('click', () => {
        for (const d of dots) {
          d.classList.remove('active');
        }
        dot.classList.add('active');
      });
    }
  });