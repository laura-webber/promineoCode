
// The map METHOD

let names = ["Bob", "Clark", "Jason"];
console.log(names);
/*
let lengths = names.map 
(function(element){
    return element.length;
});

console.log(lengths);

// The reduce METHOD

let sum = lengths.reduce(function(returnedValue, currentElement){
    return returnedValue + currentElement;

});
console.log(sum);
*/

/*
let sum = lengths.reduce(function(returnedValue, currentElement){
    return returnedValue + currentElement;

}, 1);
console.log(sum);

*/

/*     The reduce METHOD with currentIndex and array as parameters

let sum = lengths.reduce(function(returnedValue, currentElement, currentIndex, lengths){
    return returnedValue + currentElement, lenghts[], arr;

});
console.log(sum);*/

// The forEach METHOD
/*
names.forEach(function(element){
    console.log(element);
});
*/

// The filter METHOD  (returns a new array where the function invoked returned true)
/*
let fiveLetterNames = names.filter(function(element){
    return element.length == 5;
});

console.log(fiveLetterNames);
*/
// The splice METHOD  can  ADD, MODIFY or REMOVE elements

let removedElements = names.splice(0, 2);
console.log(removedElements);