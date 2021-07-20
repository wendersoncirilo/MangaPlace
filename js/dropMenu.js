const btn = document.querySelector("#btnBallonToggle");
const body = document.querySelector("body");

const menu = document.querySelector("#ballonMenu");

btn.addEventListener('click', function toggleMenu(){
  let btnRight = btn.getBoundingClientRect().right;
  let btnBottom = btn.getBoundingClientRect().bottom;

  let bodySize = body.getBoundingClientRect().width;  
  menu.classList.toggle("show");
  
  menu.style.top = (btnBottom + 20) + 'px';
  if(bodySize > 420){    
    menu.style.right = (bodySize - btnRight - 20)  +'px';
  } else {
    menu.style.right = (screen.width - btnRight -20) +'px';
  }
});

menu.addEventListener('click', function closeMenu(){
  menu.classList.remove("show");
});