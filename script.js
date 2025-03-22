Configuración del widget de tiempo
time_is_widget.init({
    time_San_Jose_del_Cabo: {
        id: "San_José_del_Cabo_z155",
        template: "TIME<br>DATE",
        time_format: "hours:minutes",
        date_format: "dayname daynum/monthnum/yy",
        coords: "23.0540600,-109.7036700"
    },
    time_Puerto_Vallarta: {
        id: "Puerto_Vallarta_z159",
        template: "TIME<br>DATE",
        time_format: "hours:minutes",
        date_format: "dayname daynum/monthnum/yy",
        coords: "20.6170000,-105.2301800"
    },
    time_Punta_Cana: {
        id: "Punta_Cana_z17a",
        template: "TIME<br>DATE",
        time_format: "hours:minutes",
        date_format: "dayname daynum/monthnum/yy",
        coords: "18.5818200,-68.4043100"
    },
    time_Cancun: {
        id: "Cancún_z11f",
        template: "TIME<br>DATE",
        time_format: "hours:minutes",
        date_format: "dayname daynum/monthnum/yy",
        coords: "21.1742900,-86.8465600"
    }
});

// Efecto de partículas
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

// Cursor interactivo
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

// Efectos de sonido
const hoverSound = new Audio('https://assets.mixkit.co/active_preview/sfx/2681/2681-preview.mp3');
const clickSound = new Audio('https://assets.mixkit.co/active_preview/sfx/2697/2697-preview.mp3');

document.querySelectorAll('.time-box').forEach(box => {
    box.addEventListener('mouseenter', () => {
        hoverSound.currentTime = 0;
        hoverSound.play();
    });

    box.addEventListener('click', () => {
        clickSound.play();
        box.style.transform = `rotateX(15deg) rotateY(-15deg) translateZ(70px)`;
        setTimeout(() => {
            box.style.transform = `rotateX(10deg) rotateY(-10deg) translateZ(50px)`;
        }, 300);
    });
});
