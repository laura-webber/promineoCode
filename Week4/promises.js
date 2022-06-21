/*
isLoginSuccessful()
//inside .then we USE an ARROW function anonimously
    .then((value) => {
        console.log(value);
    }).catch((err) => {
        console.error(err);
    });
*/



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