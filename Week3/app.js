// Recap: Write a loop that will prompt the user 3 times 
// and store the response in an array and console.log or alert
//  the answers when the loop is done

const questions = [
    "What is your name?", 
    "What is your favorite color?", 
    "What city are you in?"
];

const answers = [];

// =====================

// Write a function that takes in an the num Array.
// Remove all the odd number and multiply the rest by 3.
// Return the first number in the array

const num = [2,5,9,10,23];
/*
var removedNumbers = [];
function x(array){
    removedNumbers = array.filter(function(element){
       return element % 2 === 0;

    });

    var timesThree = removedNumbers.map(function(element){
        return element * 3;
    });
    return timesThree[0];
}

 console.log(x(num));
 */

// ===================

// Create a function that will convert a Celsius to Fahrenheit and another 
// that will convert Fahrenheit to Celsius

// The function should take in a number and run the formula and return the converted temp

// To convert C to F: Divide by 5, then multiply by 9, then add 32
// To convert F to C: Deduct 32, then multiply by 5, then divide by 9


//   ========================

// Write a function to find the longest word in the array

/*
var words = ["cat", "pizza", "accessibility", "javascript"]

function f(words){
    var longestString = "";
    words.forEach(function(element){
        if(longestString.length < element.length){
            longestString = element;
        }
    });
    return longestString;
}


console.log(f(words));

*/
// =============================

// Write a function that will take a word and/or sentence and remove all of the vowels
// and returns a new string with no spaces (please account for upper and lower case letters)
// ex: 'The Batman' should return 'thbtmn'

var text = 'The Batman';

function removeAllVowels(text){
    var newArray = [];
    newArray = text.split(""); 
    
    var removedVowels = [];
    for (i = 0; i < newArray.length; i++){
        switch (newArray[i]){
            case "a":
                break;
            case "e":
                break;
            case "i":
                break;
            case "o":
                break;
            case "u":
                break;                        
            case " ":
                break;
            default:
                removedVowels += newArray[i];    
        }
    }

    return removedVowels.toLowerCase();
}

console.log(removeAllVowels(text));

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split