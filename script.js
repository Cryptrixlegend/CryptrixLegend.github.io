const canvas = document.getElementById("snow");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let snowflakes = [];

for (let i = 0; i < 150; i++) {
  snowflakes.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 4 + 1,
    d: Math.random() + 1
  });
}

function drawSnow() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "white";
  ctx.beginPath();

  for (let i = 0; i < snowflakes.length; i++) {
    let f = snowflakes[i];
    ctx.moveTo(f.x, f.y);
    ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2);
  }
  ctx.fill();
  moveSnow();
}

function moveSnow() {
  for (let i = 0; i < snowflakes.length; i++) {
    let f = snowflakes[i];
    f.y += f.d;
    if (f.y > canvas.height) {
      f.y = 0;
      f.x = Math.random() * canvas.width;
    /* 🎄 Bulb Jhalar Lights */
.bulb-lights {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-around;
  padding: 10px 0;
  z-index: 9999;
}

.bulb-lights span {
  width: 14px;
  height: 20px;
  background: red;
  border-radius: 50%;
  animation: glow 2s infinite alternate;
}

.bulb-lights span:nth-child(1) { background: red; animation-delay: 0s; }
.bulb-lights span:nth-child(2) { background: yellow; animation-delay: .2s; }
.bulb-lights span:nth-child(3) { background: lime; animation-delay: .4s; }
.bulb-lights span:nth-child(4) { background: cyan; animation-delay: .6s; }
.bulb-lights span:nth-child(5) { background: magenta; animation-delay: .8s; }
.bulb-lights span:nth-child(6) { background: orange; animation-delay: 1s; }
.bulb-lights span:nth-child(7) { background: #00f5ff; animation-delay: 1.2s; }
.bulb-lights span:nth-child(8) { background: #9d4edd; animation-delay: 1.4s; }
.bulb-lights span:nth-child(9) { background: #ff006e; animation-delay: 1.6s; }
.bulb-lights span:nth-child(10){ background: #80ffdb; animation-delay: 1.8s; }

@keyframes glow {
  from {
    opacity: 0.4;
    box-shadow: none;
  }
  to {
    opacity: 1;
    box-shadow: 0 0 15px currentColor;
  }
}

}

setInterval(drawSnow, 30);
