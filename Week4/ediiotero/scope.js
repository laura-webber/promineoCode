// Scope
// more here: https://www.w3schools.com/js/js_scope.asp

// Global scope

let test = 'Javascript';
var test2 = 'Coding'

function testScopeGlobal() {
    if(true){
        test = 'Hello'
        console.log(`global: `, test2)
    }
    console.log(`test is: `, test)
}

// testScopeGlobal()

// let vs var

// BLOCK scope
{
    let x = 2;

}
  // x can NOT be used here

function testScopeLet() {
    if(true){
        let test = 'Hello'
        console.log(`let: `, test)
    }
}

// testScopeLet()

// --------------------------------------------

//   Variables declared with the var keyword can NOT have block scope.

//   Variables declared inside a { } block can be accessed from outside the block.
{
    var x = 2;
}
  // x CAN be used here

function testScopeVar() {
    if(true){
        var test = 'Hello VAR'
    }
    console.log(`var: `, test)
}

// testScopeVar()

//   -----------------------------------------------

// LOCAL SCOPE 

// code here can NOT use carName

function myFunction() {
    let carName = "Volvo";
    console.log(carName)
    // code here CAN use carName
};

console.log(carName)

  
  // code here can NOT use carName

// Local variables have Function Scope:
// They can only be accessed from within the function.

// Variables declared with var, let and const are quite similar when declared inside a function.