/*
isLoginSuccessful()
//inside .then we USE an ARROW function anonimously
    .then((value) => {
        console.log(value);
    }).catch((err) => {
        console.error(err);
    });
*/


/*

function handleEvent(value){
    console.log(value);
}

function handleError(value){
    console.error(value);
}

wasItSuccessful()
//we can also USE declared known FUNCTIONS
    .then(handleEvent)
    .catch(handleError);

function IsItANumber(value){
    //let num = prompt("Enter a number");
    if(value == parseInt(value)){
        return true;
    }
    else
        return false;
}


wasItSuccessful(IsItANumber("3"));

*/


let p = new Promise((resolve, reject) => {
    let a = 1 + 2;
    if (a == 2){
        resolve('Success')
    }else{
        reject('Failed')
    }
})


p.then((message) => {
    console.log('This is in the then ' + message);
}).catch((message) => {
    console.log('This is in the catch ' + message)
})






let b = (value) => {  
    return new Promise((resolve, reject) => {
    //let b = 1 + 2;
    if (value == parseInt(value)){
        resolve('Success');
    } else {
        reject(Error('Failed'));
    }
});
}



console.log(b('o'));