document.addEventListener("DOMContentLoaded", () => {
  let boxes = document.querySelectorAll(".box")
  console.log(boxes);
  let turnYellow = (e) => {
    console.log(e.style.backgroundColor)
    
  }
window.onload = function() {
   console.log('It loaded when the page loaded!')
   boxes.forEach(turnYellow)
  }
  });
