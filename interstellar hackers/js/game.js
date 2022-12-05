document.addEventListener('DOMContentLoaded', () => {

  let display = document.querySelector('.display');
  let guessQuerySelector = document.querySelector('#character');
  let textForm = document.querySelector('.textForm');
//wordbank
  var wordBank = [
    "millenium", "deathstar","asteroid","comet","galaxy","meteor","moon","saturn",
    "consellation","eclipse","orbit","satellite","space","astronaut","observatory",
    "solstice","astronomy","telescope","spaceship","orbit","mars","mercury",
  ];

  // Grabbing Random Word
  var getRandomWord = function(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  var randomWord = getRandomWord(wordBank);
  console.log('randomWord', randomWord);

  // Function that submits the values into console
  textForm.addEventListener('click', function(event) {
    event.preventDefault();

    var counter = 10;
    var triedCharacters = [];
    var correctCharacters = [];

    var guessWord = guessQuerySelector.value;
    var shorterWordlength = randomWord.length > guessWord.length ? guessWord.length : randomWord.length;

    console.log('guessWord', guessWord);

    for (i = 0; i < shorterWordlength; i++) {
        if (guessWord[i] === randomWord[i]) {
          correctCharacters.push(guessWord[i])
          console.log("correct " + correctCharacters)
        } else {
          triedCharacters.push(guessWord[i])
          console.log("incorrect " + triedCharacters)
        }
    }
    randomWord = getRandomWord(wordBank);
    console.log('randomWord', randomWord);
  })

  //making "_" equal to length of randomized word
  let underscore = randomWord.length;
  let result = randomWord.replace(/.?/g,"_ ");
  document.getElementById("guess").innerHTML=result;

  //replacing "_" with the correct letters guessed
  //if input = correct find spot in array that has the correct letters
  //then unhide correctly guessedletter which hides underscore

  //problems: variable guessWord keeps saying that it is undefined, and consolelog doesnt want to work
if (guessWord != null) {
  if(/^[a-zA-Z]/.test(guessWord) && guessWord.length == 1) {
  checkLetter();
console.log('test');
  }

  else{
      console.log("You need to put one letter");
  }
  function replaceAt(str, index, replacement) {
  return (
    str.substr(0, index) + replacement + str.substr(index + replacement.length)
  );
  }
  function checkLetter() {
  let matchedLetters = randomWord.match(guessWord);
  return replaceAt(result, matchedLetters.index, guessWord);
  }
}


});


//make side div
//count legth of word
//make ____ equal to length of word
//once it hits letter it puts correct letter in correct spot
