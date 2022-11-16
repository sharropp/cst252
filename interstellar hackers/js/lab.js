document.addEventListener('DOMContentLoaded', () => {
//title screen JS
  const gameStart = document.getElementById('gameStart');

  gameStart.addEventListener("click", loadNewPage);

  function loadNewPage(){
    window.location="game.html";
  }


});
