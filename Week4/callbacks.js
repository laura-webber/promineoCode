let username = sendHttpRequest('getUser');
console.log(username);

// a FUNCTION is a functionality (It is convetion to USE verbs for function names and the function should do ONE task)

// functions are OBJECTS
// we can pass a FUNCTION into other functions as an ARGUMENT

function logUsername(user){
    console.log(user);
}

sendHttpRequest('getUser', logUsername);


//               OR        we CAN DO THIS


sendHttpRequest('getUser', user => console.log(user));