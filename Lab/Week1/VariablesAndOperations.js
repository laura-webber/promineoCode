//create a variable to hold the quantity of available plane seats left on a flight
var planeSeatsLeft = 10;

//create a variable to hold the cost of groceries at checkout

var groceriesTotal = 20.01;
//create a variable to hold a person's middle initial

var middleInitial = 'F';

//create a variable to hold true if it's hot outside and false if it's cold outside
var isHotOutside = true;

//create a variable to hold a customer's first name
var firstName = 'Robert';

//create a variable to hold a street address
var address = '400 Toluca St';

//print all variables to the console
console.log(planeSeatsLeft);
console.log(groceriesTotal);
console.log(middleInitial);
console.log(isHotOutside);
console.log(firstName);
console.log(address);


//a customer booked 2 plane seats, remove 2 seats from the available seats variable
planeSeatsLeft -= 2;
console.log(planeSeatsLeft);

//impulse candy bar purchase, add 2.15 to the grocery total
groceriesTotal += 2.15;

//birth certificate was printed incorrectly, change the middle initial to something else
middleInitial = 'B';

//the season has changed, update the hot outside variable to be opposite of what it was
isHotOutside = !isHotOutside;

//create a new variable called full name using the customer's first name, the middle initial, and a last name of your choice
var fullName = firstName + " " + middleInitial + " " + "Berry";
console.log(fullName);

//print a line to the console that introduces the customer and says they live at the address variable
console.log("I'm " + fullName + ".\nI live at " +address + ".");