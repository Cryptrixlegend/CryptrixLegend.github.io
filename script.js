const canvas = document.getElementById("snow");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

const snowflakes = [];
for (let i = 0; i < 200; i++) { // more flakes for realism
  snowflakes.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * 3 + 1.5, // bigger flakes
    speed: Math.random() * 1.2 + 0.3,
    wind: Math.random() * 0.5 - 0.25
  });
}

function drawSnow() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "white";
  ctx.beginPath();
  for (let flake of snowflakes) {
    ctx.moveTo(flake.x, flake.y);
    ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2);
  }
  ctx.fill();
  moveSnow();
  requestAnimationFrame(drawSnow);
}

function moveSnow() {
  for (let flake of snowflakes) {
    flake.y += flake.speed;
    flake.x += flake.wind;
    if (flake.y > canvas.height) flake.y = 0;
    if (flake.x > canvas.width) flake.x = 0;
    if (flake.x < 0) flake.x = canvas.width;
  }
}

drawSnow();
