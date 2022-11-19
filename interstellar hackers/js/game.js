document.addEventListener('DOMContentLoaded', () => {

  let display = document.querySelector('.display');
  let guessQuerySelector = document.querySelector('#character');
  let textForm = document.querySelector('.textForm');
//wordbank
  var wordBank = [
    "millennium", "deathstar","asteroid","comet","galaxy","meteor","moon","saturn",
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
    console.log('codeworked')
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
});


// "and", "a", "to", "in", "is", "you", "that", "it", "he",
// "was", "for", "on", "are", "as", "with", "his", "they", "I", "at", "be",
// "this", "have", "from", "or", "one", "had", "by", "word", "but", "not",
// "what", "all", "were", "we", "when", "your", "can", "said", "there",
// "use", "an", "each", "which", "she", "do", "how", "their", "if", "will",
// "up", "other", "about", "out", "many", "then", "them", "these", "so",
// "some", "her", "would", "make", "like", "him", "into", "time", "has",
// "look", "two", "more", "write", "go", "see", "number", "no", "way",
// "could", "people", "my", "than", "first", "water", "been", "call",
// "who", "oil", "its", "now", "find", "long", "down", "day", "did", "get",
// "come", "made", "may", "part"
