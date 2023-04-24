const hamburger=document.querySelector(".hamburger");
const horizontallist=document.querySelector(".horizontal-list");

hamburger.addEventListener("click",()=>{
    hamburger.classList.toggle("active");
    horizontallist.classList.toggle("active");
})