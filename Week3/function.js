function myFunction () {
    for (let i = 0; i < 100; i++){
        console.log(i);
    }
}

myFunction();

/*
function createFullName(firstName, lastName){
    //var firstName = prompt("Please type your first name: ");
    //var lastName = prompt("Please type your last name: ");
    console.log(firstName + " " + lastName);
}*/

//createFullName("Bob", "Peterson");

function createFullName(){
    var firstName = prompt("Please type your first name: ");
    var lastName = prompt("Please type your last name: ");
    return firstName + " " + lastName;
}

function displayFullName(name){
    console.log(name);
}

var fullName = createFullName();
displayFullName(fullName);