function getRandomInt() {
  return Math.floor(Math.random() * 100);
}

document.addEventListener('DOMContentLoaded', () => {
	let randomNumber = getRandomInt();
	document.querySelector('#secretNumber').textContent = randomNumber;

  let num = document.querySelector('#inputBox');

// Handle number changes
num.addEventListener('input', function () {

	// As a string
	let val = num.value;


// As a number
	let valAsNumber = parseFloat(num.value);
	console.log(typeof val, val);
	console.log(typeof valAsNumber, valAsNumber);

  if(valAsNumber > randomNumber) {
     console.log("Your Number Is Too High!")
  };
  if(valAsNumber < randomNumber) {
     console.log("Your Number Is Too Low!")
  };
  if(valAsNumber === randomNumber) {
     console.log("You Guessed The Secret Number!")
  };
});
})
