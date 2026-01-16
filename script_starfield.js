// Minimal animated starfield background
const STAR_COUNT = 80;
const STAR_SPEED = 0.15;
const STAR_SIZE = 1.2;
const STAR_COLOR = 'rgba(255,255,255,0.7)';

function createStar(canvas) {
  return {
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    z: Math.random() * canvas.width,
    o: 0.5 + Math.random() * 0.5
  };
}

function drawStar(ctx, star) {
  ctx.beginPath();
  ctx.arc(star.x, star.y, STAR_SIZE, 0, 2 * Math.PI);
  ctx.fillStyle = STAR_COLOR;
  ctx.globalAlpha = star.o;
  ctx.fill();
  ctx.globalAlpha = 1;
}

function animateStarfield() {
  const canvas = document.getElementById('starfield-bg');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let stars = Array.from({length: STAR_COUNT}, () => createStar(canvas));

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    stars = Array.from({length: STAR_COUNT}, () => createStar(canvas));
  }
  window.addEventListener('resize', resize);
  resize();

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let star of stars) {
      star.y += STAR_SPEED;
      if (star.y > canvas.height) {
        star.x = Math.random() * canvas.width;
        star.y = 0;
        star.z = Math.random() * canvas.width;
        star.o = 0.5 + Math.random() * 0.5;
      }
      drawStar(ctx, star);
    }
    requestAnimationFrame(animate);
  }
  animate();
}

window.addEventListener('DOMContentLoaded', animateStarfield);
