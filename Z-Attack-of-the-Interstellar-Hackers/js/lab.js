document.addEventListener('DOMContentLoaded', () => {

  const gameStart = document.getElementById('gameStart');

  gameStart.addEventListener("click", loadNewPage);

  function loadNewPage(){
    window.location="game.html";
  }
});
