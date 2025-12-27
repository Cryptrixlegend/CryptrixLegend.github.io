// LOADER
window.addEventListener("load",()=>{document.getElementById("loader").style.display="none"})
// HAMBURGER MENU
const hamburger=document.getElementById("hamburger"),navMenu=document.getElementById("nav-menu")
hamburger.addEventListener("click",()=>{navMenu.classList.toggle("show")})
// ACTIVE MENU ITEM
document.querySelectorAll("#nav-menu li").forEach(item=>{
  item.addEventListener("click",()=>{
    document.querySelectorAll("#nav-menu li").forEach(i=>i.classList.remove("active"))
    item.classList.add("active")
    navMenu.classList.remove("show")
  })
})
// DATE & TIME
function updateDateTime(){document.getElementById("date-time").textContent=new Date().toLocaleString()}
setInterval(updateDateTime,1000)
updateDateTime()

// ❄ SNOW CANVAS
const canvas=document.getElementById("snow"),ctx=canvas.getContext("2d");
canvas.width=window.innerWidth; canvas.height=window.innerHeight;
let snowflakes=[];for(let i=0;i<150;i++){snowflakes.push({x:Math.random()*canvas.width,y:Math.random()*canvas.height,r:Math.random()*4+1,d:Math.random()})}
function drawSnow(){ctx.clearRect(0,0,canvas.width,canvas.height);ctx.fillStyle="white";ctx.beginPath();for(let i=0;i<snowflakes.length;i++){let f=snowflakes[i];ctx.moveTo(f.x,f.y);ctx.arc(f.x,f.y,f.r,0,Math.PI*2,true)}ctx.fill();updateSnow()}
function updateSnow(){for(let i=0;i<snowflakes.length;i++){let f=snowflakes[i];f.y+=Math.pow(f.d,2)+0.5;if(f.y>canvas.height){f.y=0;f.x=Math.random()*canvas.width}}}
setInterval(drawSnow,30)
