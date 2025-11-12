const canvas = document.getElementById("eliteCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

const particles = [];

function createParticle() {
  const x = Math.random() * canvas.width;
  const y = Math.random() * canvas.height;
  const size = Math.random() * 3 + 1;
  const speedX = (Math.random() - 0.5) * 0.5;
  const speedY = (Math.random() - 0.5) * 0.5;
  particles.push({ x, y, size, speedX, speedY });
}

for (let i = 0; i < 100; i++) {
  createParticle();
}

function drawParticles() {
  particles.forEach((p) => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(255, 0, 0, 0.3)";
    ctx.fill();
  });
}

function updateParticles() {
  particles.forEach((p) => {
    p.x += p.speedX;
    p.y += p.speedY;

    if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
    if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;
  });
}

function animate() {
  ctx.fillStyle = "rgba(10, 10, 10, 0.1)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  drawParticles();
  updateParticles();

  requestAnimationFrame(animate);
}

animate();
