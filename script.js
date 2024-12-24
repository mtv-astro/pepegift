const hamburger = document.querySelector('.hamburger-menu');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('mobile');
});
document.getElementById('launchGame').addEventListener('click', function () {
    const isMobile = window.innerWidth <= 768;
    const width = isMobile ? 360 : 400;
    const height = 640;

    window.open('/minigame/game.html', 'Minigame', `width=${width},height=${height}`);
});