// Efecto de partículas dinámicas
function createParticles() {
    const particles = document.querySelector('.quantum-particles');
    for(let i = 0; i < 200; i++) {
        const particle = document.createElement('span');
        particle.style.left = Math.random() * 100 + 'vw';
        particle.style.top = Math.random() * 100 + 'vh';
        particle.style.animationDelay = Math.random() * 20 + 's';
        particles.appendChild(particle);
    }
}
createParticles();

// Efecto de cursor interactivo
document.addEventListener('mousemove', (e) => {
    const cursor = document.querySelector('.interactive-cursor');
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    
    document.querySelectorAll('.time-box').forEach(box => {
        const rect = box.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        box.style.setProperty('--x', `${x}px`);
        box.style.setProperty('--y', `${y}px`);
    });
});

// Efectos de sonido mejorados
const hoverSound = new Audio('https://assets.mixkit.co/active_preview/sfx/2681/2681-preview.mp3');
const clickSound = new Audio('https://assets.mixkit.co/active_preview/sfx/2697/2697-preview.mp3');

document.querySelectorAll('.time-box').forEach(box => {
    box.addEventListener('mouseenter', () => {
        hoverSound.currentTime = 0;
        hoverSound.play();
        anime({
            targets: box,
            scale: 1.05,
            duration: 500,
            easing: 'easeOutExpo'
        });
    });

    box.addEventListener('click', () => {
        clickSound.play();
        anime({
            targets: box,
            scale: [1.1, 1],
            rotateX: [15, 0],
            rotateY: [-15, 0],
            duration: 800,
            easing: 'easeOutElastic(1, .5)'
        });
    });
});
