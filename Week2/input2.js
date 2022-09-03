/*var username = "rodrigo", password = "123";

username = window.prompt("Enter your username: ");
password = window.prompt("Enter your password: ");

if (username == "rodrigo" && password == "123"){
    window.alert(`Greetings ${username}`);
}else{
    window.alert(`Username and/or password are invalid.`);
}*/

/*var username = window.prompt("Enter your username: "), password = window.prompt("Enter your password: ");
if (username == "rodrigo" && password == "123"){
    alert(`Greetings ${username}`);
}else{
    alert(`Username and/or password are invalid.`);
}*/


// why not declare the variable outside the while loop !!!!!!!!!!!!!!!!!
//var username = window.prompt("Enter your username: "), password = window.prompt("Enter your password: ");
var loggedIn = false;
while(!loggedIn){
    var username = window.prompt("Enter your username: "), password = window.prompt("Enter your password: ");

    if (username == "rodrigo" && password == "123"){
        alert(`Greetings ${username}`);
        loggedIn = true;
    }
    else
    {
        alert("Incorrect username or password. ");
    }    
}




/*var username = window.prompt("Enter your username: "), password = window.prompt("Enter your password: ");

while(username != "rodrigo" || password != "123"){
    alert("Incorrect username or password. ");
    username = prompt("Enter your username: ");
    password = prompt("Enter your password: ");
}
alert("Welcome back " + username + "!");*/