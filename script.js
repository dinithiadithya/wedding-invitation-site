// Smooth Scroll for Navigation Links
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

// Card Music Player Toggle Function
function toggleCardMusic() {
    const audio = document.getElementById('card-audio');
    const musicIcon = document.getElementById('cardMusicIcon');
    const btnSpan = document.querySelector('#cardMusicBtn span');

    if (audio.paused) {
        audio.play();
        musicIcon.className = "fa-solid fa-pause";
        btnSpan.innerText = "Pause";
    } else {
        audio.pause();
        musicIcon.className = "fa-solid fa-music";
        btnSpan.innerText = "Play Song";
    }
}