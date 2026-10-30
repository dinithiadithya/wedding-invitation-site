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
// Modal එක Open කරන Function එක
function openCardGallery() {
    document.getElementById('cardModal').style.display = 'flex';
}

// Modal එක Close කරන Function එක
function closeCardGallery() {
    document.getElementById('cardModal').style.display = 'none';
}

// Card එකක් touch කළාම Phone Screen එකට photo එක දාලා උඩට scroll වෙන Function එක
function selectCard(imageName) {
    // 1. Phone mockup එකේ තියෙන img tag එකට අලුත් photo එක සෙට් කිරීම
    const mainCardImg = document.querySelector('.card-img-full');
    if (mainCardImg) {
        mainCardImg.src = imageName;
    }
    
    // 2. Pop-up Modal එක වසා දැමීම
    closeCardGallery();

    // 3. Screen එක උඩ තියෙන Phone Mockup එක වෙත Smooth Scroll කිරීම
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        heroSection.scrollIntoView({ behavior: 'smooth' });
    }
}