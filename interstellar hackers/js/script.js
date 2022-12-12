//variable declarations
const inputs = document.querySelector(".inputs"),
hintTag = document.querySelector(".hint span"),
guessLeft = document.querySelector(".guess-left span"),
wrongLetter = document.querySelector(".wrong-letter span"),
resetBtn = document.querySelector(".reset-btn"),
typingInput = document.querySelector(".typing-input");

let word, maxGuesses, incorrectLetters = [], correctLetters = [];

//code that retreives a random word from word bank
function randomWord() {
    let ranItem = wordList[Math.floor(Math.random() * wordList.length)];
    word = ranItem.word;
    maxGuesses = word.length >= 5 ? 8 : 6;
    correctLetters = []; incorrectLetters = [];
    hintTag.innerText = ranItem.hint;
    guessLeft.innerText = maxGuesses;
    wrongLetter.innerText = incorrectLetters;

    let html = "";
    for (let i = 0; i < word.length; i++) {
        html += `<input type="text" disabled>`;
        inputs.innerHTML = html;
    }
}
randomWord();

//code for input by keyboard and
function initGame(e) {
    let key = e.target.value.toLowerCase();
    if(key.match(/^[A-Za-z]+$/) && !incorrectLetters.includes(` ${key}`) && !correctLetters.includes(key)) {
        if(word.includes(key)) {
            for (let i = 0; i < word.length; i++) {
                if(word[i] == key) {
                    correctLetters += key;
                    inputs.querySelectorAll("input")[i].value = key;
                }
            }
        } else {
            maxGuesses--;
            incorrectLetters.push(` ${key}`);
        }
        guessLeft.innerText = maxGuesses;
        wrongLetter.innerText = incorrectLetters;
    }
    typingInput.value = "";

    setTimeout(() => {
        if(correctLetters.length === word.length) {
          document.querySelector(".gameWon").style.display = "block";
          setTimeout(gameWonFUN,1000);
            return randomWord();
        }
        else if(maxGuesses < 1) {
          document.querySelector(".gameOver").style.display = "block";

            for(let i = 0; i < word.length; i++) {
                inputs.querySelectorAll("input")[i].value = word[i];
            }
        }
    }, 100);
}
//return to title code
const returnTitle = document.querySelector('.return-btn');
function loadNewPage(){
  window.location="title.html";
}

//hiding gameover and game won screens as the page loads
window.onload = function() {
    document.querySelector(".gameOver").style.display = "none";
    document.querySelector(".gameWon").style.display = "none";
  }

//event listeners
resetBtn.addEventListener("click", function gameWonFUN (){
document.querySelector(".gameWon").style.display = "none";})
resetBtn.addEventListener("click", function gameOverFUN (){
document.querySelector(".gameOver").style.display = "none";})
returnTitle.addEventListener("click", loadNewPage);
resetBtn.addEventListener("click", randomWord);
typingInput.addEventListener("input", initGame);
inputs.addEventListener("click", () => typingInput.focus());
document.addEventListener("keydown", () => typingInput.focus());
