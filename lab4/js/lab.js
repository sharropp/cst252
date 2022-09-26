function flowerFunction() {
	//initialize();

	//YOUR CODE GOES RIGHT HERE

  	document.querySelector("#flower5 .center").textContent = document.querySelector("#flower1 .center").textContent + document.querySelector("#flower3 .center").textContent;
  	document.querySelector("#flower5 .center").style.backgroundColor = "purple";
  	document.querySelector("#flower5 .center").style.color = "yellow"; //Heres me changing the color of the result number to be yellow//
    const collection = document.getElementsByClassName("petal"); collection[0].style.backgroundColor = "red"; //this was my attempt of coloring the petals,//

  	document.querySelector(`#flower1`).style.marginTop = "300px"; //throughout these 5 lines, I changed all of the margin tops to be 300px so they are all in line at the center of my screen//
  	document.querySelector(`#flower2`).style.marginTop = "300px";
  	document.querySelector(`#flower3`).style.marginTop = "300px";
  	document.querySelector(`#flower4`).style.marginTop = "300px";
  	document.querySelector(`#flower5`).style.marginTop = "300px";


	// DO NOT PUT ANY CODE AFTER THIS POINT
}


function initialize() {
	//DO NOT CHANGE ANY OF THIS CODE
	document.querySelector("#flower1 .center").textContent = randomNumber();
	document.querySelector("#flower3 .center").textContent = randomNumber();



}


function randomNumber() {
	return Math.floor(Math.random() * 10);
}
