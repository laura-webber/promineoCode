var customerNames = [];
customerNames.push('Sam Smith');
customerNames.push('Tommy Guns');

console.log(customerNames[0]);

for(let i = 0; i < customerNames.length; i++){
    console.log(customerNames[i]);
}

for (name of customerNames){
    console.log(name);
}