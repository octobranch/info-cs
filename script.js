// TIME WIDGET CON EFECTOS HOLOGRÁFICOS
const timeWidgets = {
    San_Jose_del_Cabo: { coords: "23.0540600,-109.7036700", tz: "America/Mazatlan" },
    Puerto_Vallarta: { coords: "20.6170000,-105.2301800", tz: "America/Bahia_Banderas" },
    Punta_Cana: { coords: "18.5818200,-68.4043100", tz: "America/Santo_Domingo" },
    Cancun: { coords: "21.1742900,-86.8465600", tz: "America/Cancun" }
};

function initTimeWidgets() {
    Object.entries(timeWidgets).forEach(([city, data]) => {
        new TimeIs({
            element: `#${city}_time`,
            template: `
                <div class="hologram-effect" data-aos="zoom-in">
                    <div class="time-glitch">TIME</div>
                    <div class="date-hologram">DATE</div>
                </div>
            `,
            time_format: "HH:MM",
            date_format: "DDDD, DD/MM/YY",
            time_zone: data.tz,
            onUpdate: (time, date) => {
                const element = document.querySelector(`#${city}_time`);
                element.querySelector('.time-glitch').textContent = time;
                element.querySelector('.date-hologram').textContent = date;
                element.style.setProperty('--hue', (Math.sin(Date.now()/10000)*360));
            }
        });
    });
}

// SISTEMA DE PARTÍCULAS CUÁNTICAS MEJORADO
class QuantumParticles {
    constructor() {
        this.container = document.querySelector('.quantum-particles');
        this.particles = [];
        this.maxParticles = 400;
        this.init();
    }

    init() {
        for(let i = 0; i < this.maxParticles; i++) {
            const particle = document.createElement('div');
            particle.className = `quantum-particle particle-layer-${i%3}`;
            this.setInitialPosition(particle);
            this.container.appendChild(particle);
            this.particles.push({
                element: particle,
                speed: Math.random() * 0.02 + 0.01,
                angle: Math.random() * Math.PI * 2
            });
        }
        
        this.animate();
    }

    setInitialPosition(particle) {
        particle.style.setProperty('--size', Math.random() * 4 + 2 + 'px');
        particle.style.left = Math.random() * 100 + 'vw';
        particle.style.top = Math.random() * 100 + 'vh';
        particle.style.animationDelay = Math.random() * 20 + 's';
        particle.style.setProperty('--hue-offset', Math.random() * 360);
    }

    animate() {
        const animateFrame = () => {
            this.particles.forEach(particle => {
                const x = parseFloat(particle.element.style.left);
                const y = parseFloat(particle.element.style.top);
                
                particle.angle += particle.speed;
                particle.element.style.left = 
                    (x + Math.cos(particle.angle) * 0.3) % 100 + 'vw';
                particle.element.style.top = 
                    (y + Math.sin(particle.angle) * 0.3) % 100 + 'vh';
            });
            
            requestAnimationFrame(animateFrame);
        };
        animateFrame();
    }
}

// SISTEMA DE CURSOR INTERACTIVO MEJORADO
class HyperCursor {
    constructor() {
        this.cursor = document.createElement('div');
        this.cursor.className = 'hyper-cursor';
        document.body.appendChild(this.cursor);
        
        this.trail = [];
        this.trailLength = 8;
        this.initTrail();
        this.initListeners();
    }

    initTrail() {
        for(let i = 0; i < this.trailLength; i++) {
            const trailPart = document.createElement('div');
            trailPart.className = 'cursor-trail';
            document.body.appendChild(trailPart);
            this.trail.push({
                element: trailPart,
                x: 0,
                y: 0,
                delay: i * 0.03
            });
        }
    }

    initListeners() {
        document.addEventListener('mousemove', (e) => {
            this.updatePosition(e);
            this.applyPhysics();
            this.updateElements(e);
        });
        
        document.addEventListener('click', () => {
            this.cursor.classList.add('cursor-pulse');
            setTimeout(() => this.cursor.classList.remove('cursor-pulse'), 300);
        });
    }

    updatePosition(e) {
        this.targetX = e.clientX;
        this.targetY = e.clientY;
    }

    applyPhysics() {
        const ease = 0.2;
        this.currentX = this.currentX || this.targetX;
        this.currentY = this.currentY || this.targetY;
        
        this.currentX += (this.targetX - this.currentX) * ease;
        this.currentY += (this.targetY - this.currentY) * ease;
    }

    updateElements(e) {
        this.cursor.style.transform = 
            `translate(${this.currentX}px, ${this.currentY}px) 
             scale(${document.querySelector(':hover') === document.body ? 1 : 1.8})`;

        this.trail.forEach((trailPart, i) => {
            setTimeout(() => {
                trailPart.element.style.transform = 
                    `translate(${this.currentX}px, ${this.currentY}px) 
                     scale(${1 - (i/this.trailLength)})`;
                trailPart.element.style.opacity = 1 - (i/this.trailLength);
            }, i * 10);
        });

        document.querySelectorAll('.time-box').forEach(box => {
            const rect = box.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            box.style.setProperty('--x', `${x}px`);
            box.style.setProperty('--y', `${y}px`);
            box.style.setProperty('--cursor-pressure', 
                Math.min(1, Math.hypot(x - rect.width/2, y - rect.height/2)/100));
        });
    }
}

// SISTEMA DE SONIDO ESPACIAL
class AudioMatrix {
    constructor() {
        this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
        this.gainNode = this.audioContext.createGain();
        this.gainNode.connect(this.audioContext.destination);
        this.loadSounds();
    }

    async loadSounds() {
        this.sounds = {
            hover: await this.createSound('https://assets.mixkit.co/active_preview/sfx/2681/2681-preview.mp3'),
            click: await this.createSound('https://assets.mixkit.co/active_preview/sfx/2697/2697-preview.mp3')
        };
    }

    async createSound(url) {
        const response = await fetch(url);
        const arrayBuffer = await response.arrayBuffer();
        return await this.audioContext.decodeAudioData(arrayBuffer);
    }

    playSound(buffer, config = {}) {
        const source = this.audioContext.createBufferSource();
        const panner = this.audioContext.createStereoPanner();
        
        source.buffer = buffer;
        source.connect(panner);
        panner.connect(this.gainNode);
        
        source.playbackRate.value = config.speed || 1;
        panner.pan.value = config.pan || 0;
        this.gainNode.gain.value = config.volume || 0.1;
        
        source.start(0);
        return source;
    }
}

// INICIALIZACIÓN DEL SISTEMA
document.addEventListener('DOMContentLoaded', () => {
    new QuantumParticles();
    new HyperCursor();
    const audioSystem = new AudioMatrix();
    
    initTimeWidgets();
    
    // INTERACCIONES MEJORADAS
    document.querySelectorAll('.time-box').forEach(box => {
        box.addEventListener('mouseenter', () => {
            audioSystem.playSound(audioSystem.sounds.hover, {
                pan: (Math.random() - 0.5) * 0.8,
                speed: 1.2,
                volume: 0.08
            });
            
            box.classList.add('quantum-glow');
            box.style.transform = `
                rotate3d(${Math.random()}, ${Math.random()}, ${Math.random()}, 15deg)
                translateZ(70px)
            `;
        });

        box.addEventListener('mouseleave', () => {
            box.classList.remove('quantum-glow');
            box.style.transform = 'translateZ(30px)';
        });

        box.addEventListener('click', () => {
            audioSystem.playSound(audioSystem.sounds.click, {
                pan: (Math.random() - 0.5) * 0.5,
                speed: 0.9,
                volume: 0.1
            });
            
            box.style.transform = `
                rotate3d(${Math.random()}, ${Math.random()}, ${Math.random()}, 25deg)
                translateZ(100px)
            `;
            
            setTimeout(() => {
                box.style.transform = 'translateZ(30px)';
            }, 500);
        });
    });
});

// EFECTO DE RESOLUCIÓN ADAPTATIVA
window.addEventListener('resize', () => {
    document.documentElement.style.setProperty(
        '--viewport-scale',
        Math.min(1, window.innerWidth / 1920)
    );
});
