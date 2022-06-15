/*function findCircumference(radius){
    return Math.PI * 2 * radius;
}

var a = parseInt(prompt("Enter a value for the radius: "));
console.log(findCircumference(a));
*/

/*
var a = prompt("Please enter a color: ");

function isBlue(color){
    return color.toLowerCase() == "blue";
}

console.log(isBlue(a));
*/

/*
var cardBalance = parseInt(prompt("Enter your card balance: "));
var price = parseInt(prompt("Enter the price: "));

function checkout(balance, price){
    if(price > balance){
        return false;
    }
    else {
        return balance - price;
    }
}

console.log(checkout(cardBalance, price));
*/

/*
var a = prompt("Enter a word: ");

function speakFriend(element){
    if(element != "Mellon"){
        return "Access Denied";
    }else {
        return "Enter";
    }
}

console.log(speakFriend(a));
*/


let x = parseInt(prompt("Please enter a number: "));

function loopUntilX(element){
    for(i = 0; i < element; i++){
        console.log(i);

    }
    return true;
}

console.log(loopUntilX(x));