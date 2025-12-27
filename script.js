// LOADER
window.addEventListener("load",()=>{document.getElementById("loader").style.display="none"})
// HAMBURGER
const hamburger=document.getElementById("hamburger"),navMenu=document.getElementById("nav-menu")
hamburger.addEventListener("click",()=>{navMenu.classList.toggle("show")})
// ACTIVE MENU
document.querySelectorAll("#nav-menu li").forEach(item=>{
  item.addEventListener("click",()=>{
    document.querySelectorAll("#nav-menu li").forEach(i=>i.classList.remove("active"))
    item.classList.add("active")
    navMenu.classList.remove("show")
  })
})
// DATE & TIME
function updateDateTime(){
  const dt=document.getElementById("date-time")
  const now=new Date()
  dt.textContent=now.toLocaleString()
}
setInterval(updateDateTime,1000)
updateDateTime()
