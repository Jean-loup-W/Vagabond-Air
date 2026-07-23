let clickCount = 0;
let isUnlocked = false;
let animationId = null;

const logo = document.getElementById('logo-vaga');
const screen = document.getElementById('dvd-screen');
const emoji = document.getElementById('dvd-emoji');

// --- FONCTION SONORE ---
function playTingSound(step) {
  try {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();

    oscillator.type = 'sine';
    oscillator.frequency.value = 400 + (step * 80); 

    const volume = step / 10;
    gainNode.gain.setValueAtTime(volume, audioCtx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.3);

    oscillator.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    oscillator.start();
    oscillator.stop(audioCtx.currentTime + 0.3);
  } catch (e) {
    // Silencieux si non supporté
  }
}

// --- GESTION DU CLIC ET TRANSFORMATION ---
if (logo && screen && emoji) {
  logo.addEventListener('click', () => {
    if (isUnlocked) return;

    clickCount++;
    playTingSound(clickCount);

    const newScale = 1 - (clickCount * 0.07);
    logo.style.transform = `scale(${Math.max(0, newScale)})`;

    if (clickCount === 10) {
      isUnlocked = true;
      
      const rect = logo.getBoundingClientRect();
      logo.style.visibility = 'hidden'; 

      const startX = rect.left + (rect.width / 2) - 20;
      const startY = rect.top + (rect.height / 2) - 20;

      startDVDMode(startX, startY);
    }
  });
}

function startDVDMode(startX, startY) {
  screen.style.display = 'block';

  let x = startX;
  let y = startY;

  // 1. DIRECTION INITIALE TOTALE ET ÉCHELONNÉE
  // Choisit un sens aléatoire (gauche/droite et haut/bas)
  const dirX = Math.random() < 0.5 ? 1 : -1;
  const dirY = Math.random() < 0.5 ? 1 : -1;
  
  // Vitesse de départ aléatoire entre 2 et 4.5
  let speedX = (2 + Math.random() * 2.5) * dirX;
  let speedY = (2 + Math.random() * 2.5) * dirY;

  function animate() {
    const maxX = window.innerWidth - emoji.offsetWidth;
    const maxY = window.innerHeight - emoji.offsetHeight;

    x += speedX;
    y += speedY;

    // 2. REBONDS ALEATOIRES ET DYNAMIQUES
    // Rebond horizontal
    if (x <= 0 || x >= maxX) {
      speedX *= -1; // Inverse le sens horizontal
      // Recalcule speedY avec une forte variation aléatoire
      const randomFactor = (Math.random() - 0.5) * 3; 
      speedY += randomFactor;
    }

    // Rebond vertical
    if (y <= 0 || y >= maxY) {
      speedY *= -1; // Inverse le sens vertical
      // Recalcule speedX avec une forte variation aléatoire
      const randomFactor = (Math.random() - 0.5) * 3; 
      speedX += randomFactor;
    }

    // --- RÉGULATEUR DE VITESSE (Garde le chaos sous contrôle) ---
    const maxSpeed = 5;
    const minSpeed = 1.8;

    if (Math.abs(speedX) > maxSpeed) speedX = Math.sign(speedX) * maxSpeed;
    if (Math.abs(speedX) < minSpeed) speedX = Math.sign(speedX) * minSpeed;

    if (Math.abs(speedY) > maxSpeed) speedY = Math.sign(speedY) * maxSpeed;
    if (Math.abs(speedY) < minSpeed) speedY = Math.sign(speedY) * minSpeed;

    emoji.style.left = x + 'px';
    emoji.style.top = y + 'px';

    animationId = requestAnimationFrame(animate);
  }

  animate();
}