// Snowfall
const canvas = document.getElementById("snow");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const snowflakes = [];

for (let i = 0; i < 150; i++) {
  snowflakes.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * 3 + 1,
    speed: Math.random() * 1 + 0.5
  });
}

function drawSnow() {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.fillStyle = "white";
  ctx.beginPath();
  for (let flake of snowflakes) {
    ctx.moveTo(flake.x, flake.y);
    ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI*2);
  }
  ctx.fill();
  moveSnow();
  requestAnimationFrame(drawSnow);
}

function moveSnow() {
  for (let flake of snowflakes) {
    flake.y += flake.speed;
    if (flake.y > canvas.height) flake.y = 0;
  }
}

drawSnow();
