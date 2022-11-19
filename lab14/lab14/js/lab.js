//this was not working, so I fixed it.
document.addEventListener('DOMContentLoaded', () => {
console.log('code works')

	//putting the input box into a variable
	//fixed query selector by removing all and adding a "." before the class name
	let inputBox = document.querySelector('.guessingBox');


	//input event - what should happen:
	////check if they entered the right number
	////if so
	/////////create a new div
	/////////set the div to have a message "you won!"

//had to add an e in the parenthesis
	let inputHandler = (e) => {
		console.log("function is work");
		//added '' around 6 to turn it into a string
		if (e.currentTarget.value === '6'); {
			console.log("input is equal to 6");
			let newBox = document.createElement('div');
			console.log(newBox);
			newBox.classList.add('box');
			//my attempt of using append child to add the created div into the html
			let parent = document.querySelector('#body');
			parent.appendChild(newBox);
			//added parenthesis to "you won" string
			newBox.text = ('You won!');

		}
	}
//had to change "input" to "keyup"
	inputBox.addEventListener('keyup', inputHandler);



});
