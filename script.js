// ========================
// FUNCIONALIDAD DEL SITIO
// ========================

// Manejo del formulario de contacto
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            handleFormSubmit();
        });
    }

    // Agregar efectos de scroll
    addScrollAnimations();
    
    // Iniciar animaciones
    initAnimations();
});

// Manejar envío del formulario
function handleFormSubmit() {
    const form = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');
    
    // Validar que todos los campos estén llenos
    if (!form.checkValidity()) {
        showMessage('Por favor completa todos los campos requeridos', 'error');
        return;
    }

    // Obtener datos del formulario
    const formData = new FormData(form);
    const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        subject: formData.get('subject'),
        message: formData.get('message')
    };

    // Mostrar mensaje de éxito (en una aplicación real, enviarías esto a un servidor)
    console.log('Datos del formulario:', data);
    showMessage('¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.', 'success');
    
    // Limpiar formulario
    form.reset();

    // Limpiar mensaje después de 5 segundos
    setTimeout(() => {
        formMessage.style.display = 'none';
    }, 5000);
}

// Mostrar mensaje en el formulario
function showMessage(message, type) {
    const formMessage = document.getElementById('formMessage');
    formMessage.textContent = message;
    formMessage.className = `form-message ${type}`;
}

// Agregar animaciones al hacer scroll
function addScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'slideUp 0.8s ease-out forwards';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observar cards y elementos principales
    document.querySelectorAll('.benefit-card, .game-detail-card, .rule-card, .about-card, .gallery-item').forEach(el => {
        observer.observe(el);
    });
}

// Inicializar animaciones especiales
function initAnimations() {
    // Animación del contador de vueltas (simulado)
    animateLapCounter();
    
    // Efecto de velocidad en las secciones
    addSpeedEffects();
}

// Animar contador de vueltas
function animateLapCounter() {
    const createLapCounter = () => {
        const counter = document.createElement('div');
        counter.className = 'lap-counter';
        counter.textContent = 'LAP 1';
        counter.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: rgba(0, 102, 204, 0.9);
            color: white;
            padding: 10px 20px;
            border-radius: 5px;
            font-weight: bold;
            z-index: 999;
            display: none;
        `;
        document.body.appendChild(counter);
        return counter;
    };

    const lapCounter = createLapCounter();

    // Mostrar/ocultar contador al cambiar de sección
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        if (scrollY > 500 && scrollY < 5000) {
            lapCounter.style.display = 'block';
        } else {
            lapCounter.style.display = 'none';
        }
    });
}

// Agregar efectos de velocidad
function addSpeedEffects() {
    const sections = document.querySelectorAll('section');
    
    sections.forEach((section, index) => {
        section.addEventListener('mouseenter', function() {
            // Agregar efecto visual de velocidad
            this.style.transition = 'transform 0.5s ease';
        });
    });
}

// Smooth scroll para los enlaces de navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Efectos de hover en elementos interactivos
document.querySelectorAll('.cta-button, .order-button, .submit-button').forEach(button => {
    button.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
    });
    
    button.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Agregar sonido de motor (opcional)
function playEngineSound() {
    // En una aplicación real, aquí irían los sonidos
    console.log('🏎️ Motor sound effect!');
}

// Iniciar efecto de motor al hacer click en botones
document.querySelectorAll('.cta-button, .order-button').forEach(button => {
    button.addEventListener('click', function() {
        playEngineSound();
    });
});

// Animación de autos cuando se carga la página
window.addEventListener('load', function() {
    const cars = document.querySelectorAll('.car');
    cars.forEach((car, index) => {
        car.style.animation = `racing 3s ease-in-out infinite`;
        car.style.animationDelay = `${index * 0.5}s`;
    });

    // Mostrar un mensaje en consola con estilo
    console.log('%c🏎️ MathSpeed Racing - Bienvenido', 'color: #0066cc; font-size: 20px; font-weight: bold;');
    console.log('%cAprender nunca fue tan rápido y divertido', 'color: #c0c0c0; font-size: 14px;');
});

// Detectar si es un dispositivo móvil
function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

// Ajustar animaciones para dispositivos móviles
if (isMobileDevice()) {
    document.documentElement.style.setProperty('--animation-duration', '2s');
}

// Rastreador de progreso (simular avance en el "juego")
let progressLevel = 0;

function updateProgress() {
    progressLevel += 10;
    if (progressLevel > 100) progressLevel = 0;
    
    // Aquí se podría actualizar una barra de progreso visual
    console.log(`Progreso: ${progressLevel}%`);
}

// Actualizar progreso cada 5 segundos mientras el usuario está en la página
setInterval(() => {
    if (document.hasFocus()) {
        updateProgress();
    }
}, 5000);

// Estadísticas de la página
window.addEventListener('load', function() {
    const stats = {
        titulo: document.title,
        seccionesActivas: document.querySelectorAll('section').length,
        elementosInteractivos: document.querySelectorAll('.cta-button, .order-button, .submit-button').length
    };
    
    console.log('📊 Estadísticas de la página:', stats);
});

// API para el juego (simulado)
const GameAPI = {
    players: [],
    currentRound: 0,
    
    addPlayer: function(name) {
        this.players.push({ name, score: 0 });
        console.log(`🏎️ ${name} se unió a la carrera`);
    },
    
    startRace: function() {
        console.log('🏁 ¡La carrera ha comenzado!');
        this.currentRound++;
    },
    
    getScores: function() {
        return this.players.sort((a, b) => b.score - a.score);
    }
};

// Exportar GameAPI para uso en consola
window.GameAPI = GameAPI;

// Permitir debug desde la consola
console.log('💡 Consejo: Usa window.GameAPI para interactuar con el juego desde la consola');