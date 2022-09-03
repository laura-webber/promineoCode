let array1 = [1, 5, 6, 9, 10, 14];

console.log("This is the array as it was originally: ");
for(i = 0; i < array1.length; i++){
    console.log(array1[i]);
}


// print the 3rd element in array1
console.log(array1[2]);

// print the last element in array1
console.log(array1[array1.length - 1]);
//console.log(array1[5]);

// add 16 and 3 to array1
array1.push(16, 3);


/*
console.log("This is the new array after adding those 2 elements: ");
for(i = 0; i < array1.length; i++){
    console.log(array1[i]);
}
// sort the array, then print the 3rd element again
// did it change?
*/

array1.sort();

//array1.push(32, 51, 62, 94);
// console.log("And just to test how the computer is actually sorting, I added 32, 51, 62, and 94 to the array");
// for(i = 0; i < array1.length; i++){
//     console.log(array1[i]);
// }
//console.log ("And this is the element occupying the third position in the array: ")
//console.log(array1[2]);




// create a variable called myTodoList that holds an empty array
let myTodoList = [];

// add three todo items to the array using a built-in array method
myTodoList.push("item1", "item2", "item3");

// remove the second item in the array

myTodoList.splice(1,1);
console.log(myTodoList);
// create another array, yourTodoList, and add two todo items
let yourTodoList = []
yourTodoList.push("item1", "item2")

// create another array, ourTodoList

let ourTodoList = []
// combine myTodoList and yourTodoList into ourTodoList
ourTodoList = myTodoList + yourTodoList

// ourTodoList = myTodoList;
// ourTodoList += yourTodoList

console.log(ourTodoList)

// sort the following array from Z-A

// create a function called reverse that takes in parameter
// this function will return the opposite of whatever is passed in
// if its a boolean, return the opposite
// if its a number, or a string, return the reverse (i.e. 1234 becomes 4321, Name becomes emaN)
// if its an array, return the reversed array with each element reversed


// create a function called addingMachine that will add all passed numbers and return the total
// Note: you don't know how many numbers will be passed



// You just signed a contract as an estimator for a restoration company. 
// Your contract states that you take home 10% of the profits on the first $100,000
// 20% on the next $400,000
// 35% on the next $500,000
// 40% on all profits above $1,000,000
// create a function that will allow you to check how much of a bonus you make
// the function should take in two variables as arguments, grossInvoiced and profitMargin