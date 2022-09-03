var input = prompt("Enter a list of items: ");

var staticArray = ["Henry", "Peter", "Julie"];

function joinArrays(array1, array2){
    var newArray = array1.concat(array2);
    return newArray;
}

//var newArray = joinArrays(input, staticArray);
console.log(joinArrays(input, staticArray));

//console.log(newArray[0]);



var attendanceList = ["Nathan", "Nick", "Clayton"];

attendanceList[0] = "Steven";


var groceryList = ["granola", "milk", "eggs"];

function sortArray(array){
    return array.sort();
}

function gradList(graduates){
    //write your code here
    graduates.push("Mary", "Steven", "Eddie");
    graduates.sort();
    return graduates.reverse();
}