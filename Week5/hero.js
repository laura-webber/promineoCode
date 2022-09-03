// Using the object below
// 1 console log the customer name
// 2 console log using a template literal "shipping to 123 Main street Gotham NY 12345" 
// 3 add a property of "orderNum" and set it to 111222, change age to 44, console.log the object

/*
const customer = {
    name: "Toby",
    age: 32,
    address: {
        street: "123 Main street",
        city: "Gotham",
        state: "NY",
        zip: "12345"
    }
}

console.log(customer.name)
console.log(`shipping to ${customer.address.street} ${customer.address.city} ${customer.address.state} ${customer.address.zip}`)

*/

// ==================================

// Write a class for a Hero 
// - the Hero should have a property of name, health, and power
// - the Hero should also have a method of attack 
//   - attack should return power plus 5

class Hero {
    constructor(name, health, power){
        this.name = name
        this.health = health
        this.power = power
    }

    attack(){
        return this.power + 5
    }
}

// Write another class that will inherit Hero and call it Villain
// - the villain should have all the same properties as Hero
// - add a method call magic
//   - magic should return power multiplied by 2

// class Villain extends Hero {
//     constructor(name, health, power){
//         super();
//         this.name = name
//         this.health = health
//         this.power = power
//     }

//     magic(){
//         return power * 2
//     }
// }

class Villain extends Hero {
    constructor(name, health, power){
        super(name, health, power);
    }

    magic(){
        return this.power * 2
    }
}

// Create a hero and a villain and log out all of their properties

let hero1 = new Hero('Gandalf',200, 55)
let villain1 = new Villain('Sauron', 230, 50)

console.log(hero1)
console.log(villain1)

// *Bonus - Write a loop that will have the hero(use attack) and villain(use magic) attack each other 
//          reducing the amount of health left and console.log each round.

// DON'T USE OR ||
//while(villain1.health > 0 && hero1.health > 0)

while(villain1.health > 0 && hero1.health > 0){
    villain1.health -= hero1.attack()
    hero1.health -= villain1.magic()
}
// for(let i = 0; i < 2; i++){

//     villain1.health -= hero1.attack()
//     hero1.health -= villain1.magic()
// }

console.log(hero1)
console.log(villain1)