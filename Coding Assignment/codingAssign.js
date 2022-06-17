/***************************************************************************************/
// Question 1.a
/***************************************************************************************/

var ages = [3, 9, 23, 64, 2, 8, 28, 93];

var result =  ages[ages.length - 1] - ages[ages.length - ages.length];

console.log(result);

/***************************************************************************************/
// Question 1.b
/***************************************************************************************/

ages.push(10);

var result =  ages[ages.length - 1] - ages[ages.length - ages.length];

console.log(result)

/***************************************************************************************/
// Question 1.c
/***************************************************************************************/

var averageAge = 0;

for(i = 0; i < ages.length; i++){
    
    averageAge += ages[i];
}

console.log(averageAge / ages.length);

/***************************************************************************************/
// Question 2.a
/***************************************************************************************/

var names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

var wordsLength = names.map(function(element){
    return element.length;
});

var sumOfWordsLength = wordsLength.reduce(function(x,y){
    return x + y;
});

console.log( sumOfWordsLength / names.length);

/***************************************************************************************/
// Question 2.b
/***************************************************************************************/
var newList = [];

for(i = 0; i < names.length; i++){
    
    newList += names[i] + " ";
}

console.log(newList);

/***************************************************************************************/
// Question 3
/***************************************************************************************/
var theArray = ["Mike", true, 6.5]

console.log(theArray[theArray.length - 1])

/***************************************************************************************/
// Question 4
/***************************************************************************************/

console.log(theArray[0]);

/***************************************************************************************/
// Question 5
/***************************************************************************************/

var nameLengths = [];
nameLengths = names.map(function(element){
    return element.length;
})

/***************************************************************************************/
// Question 6
/***************************************************************************************/

var summation = 0;

for(var i = 0; i < nameLengths.length; i++){
    summation += nameLengths[i];
}

console.log(summation);

/***************************************************************************************/
// Question 7
/***************************************************************************************/

function concatenateXTimes(word, n){
    var i = 0;
    var newWord = '';
    while(i != n){   
        newWord += word;
        i++;
    }
    return newWord;
}

console.log(concatenateXTimes("Hello", 3));

/***************************************************************************************/
// Question 8
/***************************************************************************************/

function fullName(firstName, lastName){

    return firstName + " " + lastName;
}

console.log(fullName("Bob", "Souza"));

/***************************************************************************************/
// Question 9
/***************************************************************************************/

function isGreaterThan100(array){
    var sum = array.reduce(function(element1, element2){
        return element1 + element2;
    });
    if(sum > 100)
        return true;
}

var e = [20, 40, 50];
console.log(isGreaterThan100(e));

/***************************************************************************************/
// Question 10
/***************************************************************************************/

function averageOfNumbers(array){
    var sum = array.reduce(function(element1, element2){
        return element1 + element2;
    });
    return sum / array.length;
}

var r = [20, 40, 50];
console.log(averageOfNumbers(r));


/***************************************************************************************/
// Question 11
/***************************************************************************************/

function isAvg1GreaterThanAvg2(array1, array2){
    var sum1 = array1.reduce(function(element1, element2){
        return element1 + element2;
    });
    var sum2 = array2.reduce(function(element1, element2){
        return element1 + element2;
    });
    return Boolean(sum1 / array1.length > sum2 / array2.length);
}

var u = [20, 40, 60];
var k = [30, 40, 40];
console.log(isAvg1GreaterThanAvg2(u,k));

/***************************************************************************************/
// Question 12
/***************************************************************************************/

function willBuyDrink(isHotOutside, moneyInPocket){
    if(isHotOutside == true && moneyInPocket > 10.5){
        return true;
    }
    else
        return false;
}

console.log(willBuyDrink(true, 10.5));

/***************************************************************************************/
// Question 13 - This function takes an array as a parameter and checks each element of 
// the array to see if it is a multiple of 3. Then returns an array with boolean values.
/***************************************************************************************/

function isMultipleOf3(array){
    var results = [];
    results = array.map(function(element){
        if(element % 3 == 0){
            return true;
        }
        else{ return false;}
    });

   return results;
}

var myListOfNums = [2, 6, 10, 18, 30];

console.log(isMultipleOf3(myListOfNums));