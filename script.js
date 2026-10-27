// Navigation links වලට Smooth scrolling එකතු කිරීම
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        if (this.getAttribute('href').startsWith('#')) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});

// Live Demo button එක ක්ලික් කළහොත් පණිවිඩයක් පෙන්වීම
const liveDemoBtn = document.querySelector('.btn-secondary');
if (liveDemoBtn) {
    liveDemoBtn.addEventListener('click', () => {
        alert('Live Demo Preview loading...');
    });
}