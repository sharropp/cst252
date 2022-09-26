
//PUT YOUR FUNCTIONS UP HERE
function addToWebPage(text)
{
	document.querySelector('#content').innerHTML += text + '<br /><br />'
}


//YOU CAN ADD MORE FUNCTIONS HERE

//forEach is a loop that calls a function for each element in an array
arrayOfNames.forEach(formatAndSortNames);

//END FUNCTIONS SECTION

function formatAndSortNames() {

	let arrayOfNames, splitNames, firstName, lastName, fixedName,
		finalName, combinedString, newArray, combinedFixedString;

	arrayOfNames = ["Kizzmekia Corbett", "Ada Lovelace", "Levar Burton" ];

	finalName = arrayOfNames.pop();
	combinedString = arrayOfNames.join('; ');
	combinedString = combinedString + ' and ' + finalName;

	addToWebPage('Before, the names were: ' + combinedString);


	newArray = [];

	splitNames = finalName.split(' ');
	firstName = splitNames[0];
	lastName = splitNames[1];
	fixedName = lastName + ', ' + firstName;
	newArray.push(fixedName);

	newArray.sort();
	finalFixedName = newArray.pop();
	combinedFixedString = newArray.join('; ');
	combinedFixedString = combinedFixedString + ' and ' + finalFixedName;

	addToWebPage('Afterwards, the names are: ' + combinedFixedString);

}
