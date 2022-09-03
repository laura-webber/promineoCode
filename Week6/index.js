// Write a class called Temperature that will take fahrenheit as a property this will be a number
// the number should be between 212 and -459.67
// Temperature should have 2 methods one for converting fahrenheit to celsius
// and another to convert celsius to kelvin
// create 2 new object with this class

class Temperature {
    constructor(temp){
        
        this.temp = temp;
    }

    convertToC(){
        return (this.temp - 32)*5/9;
    }

    convertToK(){
        return (this.temp - 32)*5/9 + 273.15;
    }
}

let obj1 = new Temperature(100);
let obj2 = new Temperature(-2);

console.log(obj1.convertToC());

console.log(obj1.convertToK());


