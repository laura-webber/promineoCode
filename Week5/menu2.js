
// My Menu App

let items = "";
let cart = [];


class Item{
    constructor(name, quantity) {
        this.name = name;
        this.quantity = parseInt(quantity);
    }

    viewAmount() {
    if(cart.length == 0){
        alert("Your cart is empty.")
    } else {
        // for(let i = 0; i < cart.length; i++){
        //         items += `You have ${cart[i].quantity} of ${cart[i].name}.`;    
        //     }
            alert(cart[0].name + cart[0].quantity);
        }
    }
    addItemToCart(){

    let chosenItem = new Item(prompt("Enter item to add to your cart: "), prompt(`Please enter the amount you would like.`));
    
    while(chosenItem.quantity <= 0){
        chosenItem.quantity = prompt(`Please enter an amount greater than 0.`);
    }

    alert(`You added ${chosenItem.quantity} ${chosenItem.name}(s) to your cart.`);
    
    items = chosenItem.name;    
    cart.push(items);

}

    viewCart(){
    
    if(cart.length == 0){
        alert("Your cart is empty.")
    } else {    
        alert(`You have in your cart: ${cart}`);
        
    }  
} 

    removeItemFromCart(){
  
    if (cart.length != 0) {
            let item = prompt(`Which item do you want to remove? 
            ${cart}`);
            cart = cart.filter(element => element != `${item}`);
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
        
        while (option != 0){
            switch (option){
                case "1":
                    this.addItemToCart();
                    break;
                case "2":
                    this.viewCart();
                    break;
                case "3":
                    this.removeItemFromCart();
                    break;
                case "4":
                    this.viewAmount();
                default:
                    option = 0;
            }       
            option = this.showMenu();
        }
        alert("You exited the application. Bye!");
    }

    showMenu(){
        return prompt(`
            Please choose one of the following options:

            0:  Exit application
            1:  Add a new item to your cart
            2:  View items in your cart
            3:  Remove item from cart
            4:  View amounts of each item
        `);
    }
}

let menu = new Menu();
menu.start();
