let array1 = [1, 5, 6, 9, 10, 14];

console.log("This is the array as it was originally: ");
for(i = 0; i < array1.length; i++){
    console.log(array1[i]);
}
// print the 3rd element in array1

//console.log(array1[2]);
// print the last element in array1

//console.log(array1[5]);

// add 16 and 3 to array1

//console.log(array1.length);
array1.push(16, 3);
//console.log(array1.length);
/*
console.log("This is the new array after adding those 2 elements: ");
for(i = 0; i < array1.length; i++){
    console.log(array1[i]);
}
// sort the array, then print the 3rd element again
// did it change?
*/

array1.push(32, 51, 62, 94);
array1.sort();

console.log("And just to test how the computer is actually sorting, I added 32, 51, 62, and 94 to the array");

for(i = 0; i < array1.length; i++){
    console.log(array1[i]);
}

//console.log ("And this is the element occupying the third position in the array: ")
//console.log(array1[2]);
