document.addEventListener("DOMContentLoaded", () => {
  const boxes = document.querySelectorAll(".box");
  console.log(boxes);
window.onload = function() {
   console.log('It loaded when the page loaded!');
   boxes.forEach(boxes => {
   boxes.style.backgroundColor = "yellow";
 });
}
  var boxes2 = document.getElementsByClassName('box')
  for (var i = 0; i < boxes2.length; i++) {
    // Here we have the same onclick
    boxes2[i].addEventListener('click', function (event) {
      console.log('Element ' + event.target.innerHTML + ' was just clicked')
      this.style.borderWidth = ("thick");
    })
  }
  });
