// Write a function that asks the user for 3 numbers, adds them up and multiply the sum by 3
// You must check that the users inputs is a number if it isn't alert the user 
// and prompt the user again


// const getNumbers = () => {
//     let currentNumber = 0;

//     for (let i = 0; i < 3; i++) {
//         let question = parseInt(prompt('Pick a number'));
//         //console.log('question is: ', question)
//         while(isNaN(question)){
//             question = parseInt(prompt('Pick a number'));
//         }

//         currentNumber = currentNumber + question;
//         //console.log('current turn at ', i)
//     }

//     return currentNumber * 3;
// }

// console.log(getNumbers())

// =========================================

// function multiplyBy3(){
//     let sum = 0;
//     let number = prompt("Enter a number");

//     while(number != parseInt(number)){
//         alert("You didn't choose a valid number");
//         number = prompt("Enter a number");
//     }
    
//     sum += number;
    
//     console.log(sum * 3);
        
// }

// multiplyBy3();


/*
function multiplyBy3(){
    
    let number = [];
    for(let i = 0; i < 3; i++){
        number[i] = prompt("Enter a number") ;
        while(number[i] != parseInt(number[i])){
            alert("You didn't enter a valid number")
            //console.log("You didn't enter a valid number");
            number[i] = prompt("Enter a number");
        }
    }
    let sum = number.reduce(function(x,y){
        return parseInt(x) + parseInt(y);
    });
    // console.log(number);
    console.log(sum*3);
}

multiplyBy3();

*/


// ============================================

// Write a function called 'finishSentence' that takes two inputs an array and a function
// use the list array below
// your callback function called 'combine' should combine two string together and return them
// finishSentence should loop through the given array prompt the user with the questions in the array
// and combine the element in the array with the word given in the prompt and alert the answer
//*** Bonus: accomplish the same result without the finishSentence function and use an array method


const list = ["My name is ", "I live in ", "My favorite food is "];

// MY SOLUTION

// const combine = (sentence) => {
//     let answer = [];
//     let word = '';
//     for (let i = 0; i < sentence.length; i++){
//         word = prompt(sentence[i]);
//         answer[i] = sentence[i] + word;
        
//     }
//     for(let i = 0; i < answer.length; i++){
//         alert(answer[i]);
//     }
//     // display the array
//     console.log(answer);
// }

// combine(list);


// Ediiotero's SOLUTION

// const combine = (sentence, word) => `${sentence} ${word}`;

// const finishSentence = (array, callback) => {
//     for (let i = 0; i < array.length; i++) {
//         const word = prompt(array[i]);
//         alert(callback(array[i], word))
//     }
// };

// finishSentence(list, combine);

// SOLUTION USING ARRAY METHOD

// list.forEach(item => {
//     const word = prompt(item);
//     alert(combine(item, word))
// });



// ============================================

// Write a Promise
// The promise should prompt the user to guess a number, wait 3 seconds 
// and check to see if the number is greater than or equal to 10
// if its larger resolve the promise
// if its lower reject the promise
// Use the promise to alert "you win" if resolved
// and "you lose" if rejected


let p = new Promise((resolve, reject) => {
    let number = prompt("Guess a number: ");
    setTimeout(() => {
        if (number >= 10){
            resolve;
            alert("you win");
        }else{
            reject;
            alert('you lose');
        }
    }, 3000)
    
});


p.then(value => alert(value))
 .catch(value => alert(value))



// const myPromise = new Promise(function (resolve, reject) {
//     const guess = prompt("Guess a number!");
//     setTimeout(() => {
//         if(guess >= 10){
//             resolve("You win!")
//         }else{
//             reject("You lose")
//         }
//     }, 3000)
// });

// myPromise.then(value => alert(value)).catch(err => alert(err));
