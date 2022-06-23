// Write a function that asks the user for 3 numbers, adds them up and multiply the sum by 3
// You must check that the users inputs is a number if it isn't alter the user 
// and prompt the user again

const getNumbers = () => {
    let currentNumber = 0;

    for (let i = 0; i < 3; i++) {
        let question = parseInt(prompt('Pick a number'));
        console.log('question is: ', question)
        while(isNaN(question)){
            question = parseInt(prompt('Pick a number'));
        }

        currentNumber = currentNumber + question;
        console.log('current turn at ', i)
    }

    return currentNumber * 3;
}

// console.log(getNumbers())

/*

function multiplyBy3(num1, num2, num3){
    if ( num1 == parseInt(num1) && num2 == parseInt(num2) && num3 == parseInt(num3)){
        const result = num1 + num2 + num3;
        console.log(result * 3);
    }
    else{
        console.log(" You didn't enter 3 numbers!");
        
    }

}

num1 = prompt();
num2 = prompt();
num3 = prompt(); 

*/




// ============================================

// Write a function called 'finishSentence' that takes two inputs an array and a function
// use the list array below
// your callback function called 'combine' should combine two string together and return them
// finishSentence should loop through the given array prompt the user with the questions in the array
// and combine the element in the array with the word given in the prompt and alert the answer
//*** Bonus: accomplish the same result without the finishSentence function and use an array method

const list = ["My name is ", "I live in ", "My favorite food is "];

const combine = (sentence, word) => `${sentence} ${word}`;

const finishSentence = (array, callback) => {
    for (let i = 0; i < array.length; i++) {
        const word = prompt(array[i]);
        alert(callback(array[i], word))
    }
};

// finishSentence(list, combine);

// list.forEach(item => {
//     const word = prompt(item);
//     alert(combine(item, word))
// });

function combine(){

}

function finishSentence(array, func){
    let results = [];
    for(let i = 0; i < array.length; i++){
        results = array + prompt(array[i]); 
    }

}



// ============================================

// Write a Promise
// The promise should prompt the user to guess a number, wait 3 seconds 
// and check to see if the number is greater than or equal to 10
// if its larger resolve the promise
// if its lower reject the promise
// Use the promise to alert "you win" if resolved
// and "you lose" if rejected

const myPromise = new Promise(function (resolve, reject) {
    const guess = prompt("Guess a number!");
    setTimeout(() => {
        if(guess >= 10){
            resolve("You win!")
        }else{
            reject("You lose")
        }
    }, 3000)
});

let p = new Promise((resolve, reject) => {
    let number = prompt("Guess a number: ");
    setTimeout = 3000;
    if (number >= 10){
        resolve('Success')
        alert("you win");
    }else{
        reject('Failed')
        alert('you lose');
    }
})


p.then(() => {
    alert("you win");
}).catch((message) => {
    alert("you lose");
})
myPromise.then(value => alert(value)).catch(err => alert(err));
