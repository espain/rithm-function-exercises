//arrayManipulation function--------------------------------------------

//what I want to do here: 
//--I want to pass 3 or 4 arguments into a function called arrayManipulation
//---Those arguments are (the input array, the command, the location to execute the command, and the new value if the command is add)
//----The array is an array. The available commands are 'add' or 'remove'. The available locations are 'beginning' or 'end'. The new value is a new value in the array.  
//--The function should return the updated array. (In the original instructions, you would return removed values for the remove functions. Idk if I like that, but I'll code an alt version that does that. )
//--This would make sense as 2 or 4 functions. Either 2 that can 1) add to the beginning or end, and 2) remove from the beginning or end. Or, 4 functions that can 1) add to the beginning, 2) add to the end, 3) remove from the beginning, or 4) remove from the end. 
//---Then, those functions will be called into arrayManipulation. 

function addToArray(arrayValue, locationValue, newValue) {
	let newArray = arrayValue;
	let locationToAdd = locationValue.toLowerCase();
	if (locationToAdd == "beginning") {
		newArray.unshift(newValue);
	}
	else if (locationToAdd == "end") {
		newArray.push(newValue);
	}
	else console.log("Location Value Unknown");
	return newArray;
}

function removeFromArray(arrayValue, locationValue) {
	let newArray = arrayValue;
	let locationToRemove = locationValue.toLowerCase();
	if (locationToRemove == "beginning") {
		newArray.shift();
	}
	else if (locationToRemove == "end") {
		newArray.pop();
	}
	else console.log("Location Value Unknown");
	return newArray;
}

function arrayManipulation(arrayValue, commandValue, locationValue, newValue){
	let myCommand = commandValue.toLowerCase();
	let removedValue;
	if (myCommand == "add") {
		addToArray(arrayValue, locationValue, newValue);
		return arrayValue;
	}
	else if (myCommand == "remove") {
		removeFromArray2(arrayValue, locationValue);
		return arrayValue;
	}
	else console.log("Error- Unknown Instructions");
	return arrayValue;
}


function removeFromArray2(arrayValue, locationValue) {
	let newArray = arrayValue;
	let locationToRemove = locationValue.toLowerCase();
	let removedValue;
	if (locationToRemove == "beginning") {
		removedValue = newArray.shift();
	}
	else if (locationToRemove == "end") {
		removedValue = newArray.pop();
	}
	else console.log("Location Value Unknown");
	return removedValue;
}

function arrayManipulation2(arrayValue, commandValue, locationValue, newValue){
	let myCommand = commandValue.toLowerCase();
	let removedValue;
	if (myCommand == "add") {
		addToArray(arrayValue, locationValue, newValue);
		return arrayValue;
	}
	else if (myCommand == "remove") {
		removedValue = removeFromArray2(arrayValue, locationValue);
		return removedValue;
	}
	else console.log("Error- Unknown Instructions");
	return arrayValue;
}


//Tests
console.log("This will add 15 to the end of [3,5,10]: " + arrayManipulation([3,5,10], "add", "end", 15));
console.log("This will add 'green' to the beginning of [blue, purple, red]: " + arrayManipulation(["blue", "purple", "red"], "add", "beginning", "green"));
console.log("This will remove 99 from the end of [11, 33, 66, 99]: " + arrayManipulation([11, 33, 66, 99], "remove", "end"));
console.log("This will remove 'tacos' from the beginning of [tacos, burgers, pizza, salad]: " + arrayManipulation(["tacos", "burgers", "pizza", "salad"], "remove", "beginning"));
console.log("This will remove 99 from the end of [11, 33, 66, 99]: " + arrayManipulation2([11, 33, 66, 99], "remove", "end"));
console.log("This will remove 'tacos' from the beginning of [tacos, burgers, pizza, salad]: " + arrayManipulation2(["tacos", "burgers", "pizza", "salad"], "remove", "beginning"));
console.log("This will throw an error and return the original array: " + arrayManipulation([44], "additional", "middle", "15"));

//isPalindrome function--------------------------------------------

//what I want to do here: 
//--create a function called isPalindrome
//--which accepts a string
//---I cleaned the string, so it's only alphanumeric characters, no spaces
//----Getting to Only Letters and Numbers:
//-----I used RegEx for this: the slashes forward slashes contain the pattern I'm looking for. 
//-----I'm using the replace method, and replacing anything that isn't 0-9, a-z with nothing ('').
//-----The g after the / is to indicate a global search (it won't stop after the first match). 
//----Only Lower Case Letters to make comparison easier
//-----toLowerCase();
//--then checks whether that string is a palindrome
//---this could happen if you create an array and then reverse it and compare the reversed and original? 
//---ideally, ignoring capital letters or spaces
//--and returns true if it is a palindrome
//---or false if it is not a palindrome


function isPalindrome(inputString){ //create a function called isPalindrome that accepts a string
	let palindromeCheck; //a variable to hold true/false, which will be returned
	cleanString = inputString.replace(/[^0-9a-zA-Z]/g, ''); //used regEx to remove any non-alphanumeric characters, including spaces
	lowerString = cleanString.toLowerCase(); //changed the string to lower case to make comparison easier
	lowerArray = lowerString.split(""); //turn the string into an array so it can be reversed
	reversedArray = lowerArray.toReversed(); //create a reversed array
	
	palindromeCheck = lowerArray.every((element, index) => element === reversedArray[index]); //sets true or false to palindromeCheck based on whether every element in the lowerArray matches every element in the reversedArray
	return palindromeCheck; //return the value of palindromeCheck (true or false)
}


//Tests
console.log("Is Hannah a palindrome? Answer: " + isPalindrome("Hannah"));
console.log("Is Ellie a palindrome? Answer: " + isPalindrome("Ellie"));
console.log("Is 'The quick fox' a palindrome? Answer: " + isPalindrome("The quick fox"));
console.log("Is 'taco cat' a palindrome? Answer: " + isPalindrome("taco cat"));

//Rock, Paper, Scissors function--------------------------------------------

//what I want to do here: 
//--create a function called rockPaperScissorsGame
//--which accepts a user-generated value of Rock, Paper, or Scissors
//---this will require a prompt
//----easy: text input
//----preferred: rock, paper, scissors, quit choices
//--and generates a random value of Rock, Paper, or Scissors for the 'computer' to play with
//---this requires a random number generator with values like 0-.33 = rock, .33-.66 = paper, else scissors
//----look up RNG guidelines- is it always between 0 and 1, are ranges inclusive or exclusive? 
//--which then returns a win, lose, or tie response to the user
//---this could be an alert, or, since below requires a prompt, could just be a part of the prompt
//--and ideally allows them to play again (didn't do for 1st round)
//---requires a prompt

function generateRockPaperorScissors() {
	let computerThrows;
	let itemValue = Math.random();
		if (itemValue <= .33) {
			computerThrows = "rock";
		}
		else if (itemValue >= .66) {
			computerThrows = "paper";
		}
		else computerThrows = "scissors";
	return computerThrows;
}

function userThrowInput() {
	let userAnswer = prompt("Let's play Roshambo! Would you like to throw rock, paper, or scissors?");
	let userThrows = userAnswer.toLowerCase();
	return userThrows;
}

function whoWinsRockPaperScissors(userThrows, computerThrows) {
	 let outcomeMessage;
		 if (userThrows === computerThrows) {
		 	outcomeMessage = "We tied!";
		 }
		 else if (userThrows == "rock" && computerThrows == "paper" || userThrows == "paper" && computerThrows == "scissors" ||	userThrows == "scissors" && computerThrows == "rock") {
		 	outcomeMessage = "I won!";
		 }
		 else outcomeMessage = "You won!";
	 return outcomeMessage;
}

function rockPaperScissorsGame() {
	let userThrows = userThrowInput();
	let computerThrows = generateRockPaperorScissors();
	let finalmessage = whoWinsRockPaperScissors(userThrows, computerThrows);
	alert(finalmessage);
	return finalmessage;
}


//Tests
rockPaperScissorsGame();