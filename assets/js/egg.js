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

    // Réduction de 0.07 par clic comme tu le souhaites !
    const newScale = 1 - (clickCount * 0.07);
    logo.style.transform = `scale(${Math.max(0, newScale)})`;

    // Au 10e clic : masquage et lancement depuis la position du logo
    if (clickCount === 10) {
      isUnlocked = true;
      
      // Récupère la position exacte du logo sur l'écran
      const rect = logo.getBoundingClientRect();
      
      // Masque le logo d'origine
      logo.style.visibility = 'hidden'; 

      // Lance le DVD depuis la position du logo (en le centrant légèrement)
      const startX = rect.left + (rect.width / 2) - 20;
      const startY = rect.top + (rect.height / 2) - 20;

      startDVDMode(startX, startY);
    }
  });
}

function startDVDMode(startX, startY) {
  screen.style.display = 'block';

  // Le DVD commence pile à la position calculée
  let x = startX;
  let y = startY;

  let speedX = 2.5;
  let speedY = 2.5;

  function animate() {
    const maxX = window.innerWidth - emoji.offsetWidth;
    const maxY = window.innerHeight - emoji.offsetHeight;

    x += speedX;
    y += speedY;

    // Rebond horizontal + variation
    if (x <= 0 || x >= maxX) {
      speedX *= -1;
      speedY += (Math.random() - 0.5);
    }

    // Rebond vertical + variation
    if (y <= 0 || y >= maxY) {
      speedY *= -1;
      speedX += (Math.random() - 0.5);
    }

    // --- RÉGULATEUR DE VITESSE ---
    const maxSpeed = 4;
    const minSpeed = 2;

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