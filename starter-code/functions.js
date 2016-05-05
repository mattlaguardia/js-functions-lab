// Question 1
function maxOfTwoNumbers(num1, num2) {
	// function find largest number - use if then else statements
	if (num1 > num2) {
		return num1 
	} else {
	// return the larger number
		return num2
	};
}

// Question 2
function maxOfThree(num1, num2, num3) {
	if (num1>num2 && num1>num3) {
		return num1
	} else if (num2>num1 && num2>num3) {
		return num2
	} else {
		return num3
	}
}

// Question 3
function isCharacterAVowel(character) {
	// takes a string as an argument
	// logical operator
	if (character = "a" || "e" || "i" || "o" || "u") {
		return character
	} else {
		return "not a vowel"
	}
	// takes character and sees if the character is a vowel
	// returns true if the character is a vowel
}

// Question 4
function sumArray(inputArray) {
	// take an array of number then add those numbers
	var arrayOfNumbers = 0;
	for (var i = 0; i < inputArray.length; i++){
		arrayOfNumbers += inputArray[i];
	}
	return arrayOfNumbers;
}

// Question 4
function multiplyArray(inputArray) {
	var multiple = 1;
	for (var i = 0; i < inputArray.length; i++){
		multiple *= inputArray[i];
	}
	return multiple;
}


// Question 5
var numberOfArguments = function(){
	// take arguments
	return arguments.length;
	// find number of arguments that are being called
	// return the amount of arguments
}



// Question 6
var reverseString = function (string){
	var newString = '';
	var i = string.length;
	while (i>0) {
		newString += string.substring(i - 1, i);
		i--;
	}
  	return newString;
};

var reverseString = function (string){
	return string.split('').reverse().join('');
}

// Question 7

function findLongestWord (arrayOfWords) {
	var letterCount = [];
		for (var i = 0; i < arrayOfWords.length; i++){
			if (letterCount.length < arrayOfWords[i].length) {
				letterCount = arrayOfWords[i];
			}
		}
	return letterCount;
}


// Question 8
function filterLongWords (array, num) {
	newArray = [];
	for (var i = 0; i < array.length, i++) {
		if (array[i].length > num) {
			newArray.push(array[i]);
		}
	}
	return newArray;
}


// Bonus 1
// (hint: `prototype`)
String.prototype.reverse = function(){
	return this.split('').reverse().join('');
}


// Bonus 2
function charactersOccurencesCount(stringToCount) {
  	var characters = {};
  	// replacing all Capitals by Lowercase letters and removing spaces
  	var stringToCount = stringToCount.toLowerCase().replace(/\s/g, '');
  	stringToCount.split("").forEach(function(l){
  		characters[l] = (isNaN(characters[l]) ? 1 : characters[l] + 1);
  	});
  	return characters;
  }
}

