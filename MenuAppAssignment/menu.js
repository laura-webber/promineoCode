// My Menu App

let itemNames = "";
let cart = [];
let amounts = "";

class Item{
    constructor(name, quantity) {
        this.name = name;
        this.quantity = parseInt(quantity);
    }
   
    addItemToCart(){

        let chosenItem = new Item(prompt("Enter item to add to your cart: "), prompt(`Please enter the amount you would like.`));
        
        alert(`You added ${chosenItem.quantity} ${chosenItem.name} to your cart.`);
    
        itemNames = chosenItem.name;   
        amounts = `${chosenItem.quantity}`;

        cart.push(amounts);
        cart.push(itemNames);
    }

    viewCart(){
 
        if(cart.length == 0){
            alert("Your cart is empty.")
        } else{    
            alert(`You have in your cart: ${cart.join(" ")}`)
        }  
    } 

    removeItemFromCart(){

        if (cart.length != 0) {
            let itemToRemove = prompt(`Which item/number do you wish to remove: ${cart.join(" ")}`);

            cart = cart.filter(element => element != `${itemToRemove}`);

        } else {
                alert("Your cart is empty.")
        }
    }
    
}


class Menu extends Item{
    constructor(name, quantity){
        super(name,quantity);
    }
    
    start(){
        let option = this.showMenu();
        while (option != 1){
            switch (option){
                case "1":
                    option = 1;
                    break;
                case "2":
                    this.addItemToCart();
                    break;
                case "3":
                    this.viewCart();
                    break;
                case "4":
                    this.removeItemFromCart();
                    break;
                default:
                    alert("Invalid input");
            }       
            option = this.showMenu();
        }
        alert("You exited the application. Bye!");
    }

    showMenu(){
        return prompt(`            Welcome
            Please choose one of the following options:

            1:  Exit application
            2:  Add a new item to your cart
            3:  View items in your cart
            4:  Remove item from cart
        `);
    }
}

let menu = new Menu();
menu.start();