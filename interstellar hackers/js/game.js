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

  //making the ammount of "_" equal to letter length of randomized word
  let underscore = randomWord.length;
  let result = randomWord.replace(/.?/g,"_ ");
  document.getElementById("guess").innerHTML=result;

  //replacing "_" with the correct letters when guess contains letter that are correct

  //plan:
  //if input = correct find spot in array that has the correct letters
  //then unhide correctly guessed letter which hides underscore

  //current problems:
  //the if statement is an attempt to make the code run after a guess is made
  //else statement goes instantly and doesnt wait until an input is made
  //use event handlers so the code works when clicked instead of on load

if (guessQuerySelector != null) {
  if(/^[a-zA-Z]/.test(guessQuerySelector) && guessQuerySelector.length == 1) {
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
  let matchedLetters = randomWord.match(guessQuerySelector);
  return replaceAt(result, matchedLetters.index, guessQuerySelector);
  }
}

//make each underscore into its own div so its easier to select the underscore
//make divs float left so they are next to eachother
//problem with this is that all words need the same length

//attempts left code
if (document.getElementsByTagName("button")) {
  document.getElementsByTagName("button".onclick = alert("attempt"));
  console.log('if statement worked');
  //use event handlers so the code works when clicked instead of on load
  //combine code above with this in an on click event handler
}


//win and loss condition
});

//gameplan and steps needed to follow:
//make side div V
//count legth of word V
//make ____ equal to length of word V
//once it hits letter it puts correct letter in correct spot
//once this is done work on "attempts left"
//once that is done work on win condition and loss condition
//then work on css and refining looks and code
//ideas of things to add if we have time:
//-music
//-easter eggs
//-
