/*for(var i = 0; i < 10; i++){
    console.log(i);
}


for(var i = 0; i < 10; i += 2){
    console.log(i);
}

for(var i = 0; i < 20; i++){
    if(i % 2 == 0){
        console.log(i);
    }
}


*/
var names = ["Bob", "Mike", "Cody"];/*

for(var i = 0; i < names.length; i++){
    console.log(names[i]);
}

console.log(names.length);

*/

var a = 10;

do{
    console.log(a);
}
while(a < 10);

for(i in names){
    console.log(names[i]);
}

/*
for(i of names){
    console.log(i);
}*/

for(name of names){
    console.log(name);
}