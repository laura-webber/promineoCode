//var fs = require("fs");
//var input = fs.readFileSync(process.stdin.fd, "utf-8").trim().split("\n");



//    CONDITIONALS

/*
var num1 = //parseInt(input[0]);
prompt("Enter a number: ");
var num2 = //parseInt(input[1]);
prompt("Enter another number: ");

//write your code here
if(num1 > num2){
    console.log(num1);
}else if(num1 == num2){
    console.log("Num1 is equal to Num2");
}
else{
    console.log(num2);
}*/

/*et num1 = 37;

if(num1){
    console.log("Parakeet");
} else {
    console.log("Parrot");
}*/

/*
var myNumber = parseInt(input[0]);
var num1 = parseInt(input[1]);

//write your code here.
if(myNumber == num1){
    console.log(num1 + " is equal to my number, " + myNumber);
} else if (myNumber > num1){
    console.log(num1 + " is smaller than my number, " + myNumber);
} else {
    console.log(num1 + " is larger than my number, " + myNumber);
}*/

/*
var num1 = //parseInt(input[0]);
prompt("Enter a number: ");
var num2 = //parseInt(input[1]);
prompt("Enter a number: ");
var num3 = //parseInt(input[2]);
prompt("Enter a number: ");
var num4 = //parseInt(input[3]);
prompt("Enter a number: ");


//write your code here
if(num1 >= num2){
    if(num3 >= num4){
        console.log("Both statements are true.");
    } else {
        console.log("The first statement is true, but the second is not.");
    }
}
console.log("Program ended.");*/

/*
var numberOfDay = //parseInt(input[0]);
prompt("Enter a number from 1-7");
//write your code here
switch(numberOfDay){
case "1": 
console.log("Sunday");
break;
case "2": console.log("Monday");
break;
case "3": console.log("Tuesday");
break;
case "4": console.log("Wednesday");
break;
case "5": console.log("Thursday");
break;
case "6": console.log("Friday");
break;
case "7": console.log("Saturday");
break;
default:
    console.log("The number of day is invalid.");
}
*/



//      BOOLEAN OPERATORS

/*
let x = 45;
let y = 65;
let z = 75;

console.log(x + y > z);


var a = parseInt(input[0]);
var b = parseInt(input[1]);
var c = parseInt(input[2]);
var d = parseInt(input[3]);

//Write your code here
console.log((a > b) || (b > d) && (c > d));
*/



//          LOOPS

/*var countDown = parseInt(input[0]);

write your code here
if(countDown >= 3 && countDown < 11)
{
    while(countDown !== 0){
    console.log(countDown + "...");
    countDown--;
    }
}
console.log("We have lift off!");



var x = parseInt(input[0]);


//write your code here
for(var i = 0; i <= x; i++){
    console.log(i);
}




var userNumber = parseInt(input[0]);

//write your code here
if(userNumber > 0 && userNumber <= 100){
    while(userNumber < 101){
        console.log(userNumber);
        userNumber++;
    }
}else {
    console.log("Your number was not between 1 and 100.");
}
*/

/*
var requiredCupsOfRice = parseInt(input[0]);
var currentCupsOfRice = 0;

//write your code here
do{
    currentCupsOfRice++;
    console.log("The bowl contains " + currentCupsOfRice + " cups of rice.");
}
while(currentCupsOfRice < requiredCupsOfRice);
    
console.log("We have enough rice!");
*/

var number = 0;
while(number != 10){
    console.log(++number);
}