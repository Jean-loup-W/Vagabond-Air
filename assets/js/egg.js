let clickCount = 0;
let animationId = null;

const logo = document.getElementById('logo-vaga');
const screen = document.getElementById('dvd-screen');
const emoji = document.getElementById('dvd-emoji');

if (logo && screen && emoji) {
  logo.addEventListener('click', () => {
    clickCount++;
    
    // Au bout de 10 clics, on lance l'animation définitive
    if (clickCount === 10) {
      startDVDMode();
      clickCount = 0;
    }
  });
}

function startDVDMode() {
  screen.style.display = 'block';

  let x = 20;
  let y = 20;

  let speedX = 2.5;
  let speedY = 2.5;

  function animate() {
    const maxX = window.innerWidth - emoji.offsetWidth;
    const maxY = window.innerHeight - emoji.offsetHeight;

    x += speedX;
    y += speedY;

    // Rebond horizontal + variation d'angle
    if (x <= 0 || x >= maxX) {
      speedX *= -1;
      speedY += (Math.random() - 0.5);
    }

    // Rebond vertical + variation d'angle
    if (y <= 0 || y >= maxY) {
      speedY *= -1;
      speedX += (Math.random() - 0.5);
    }

    emoji.style.left = x + 'px';
    emoji.style.top = y + 'px';

    animationId = requestAnimationFrame(animate);
  }

  animate();
}


