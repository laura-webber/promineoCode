
// My Menu App

let items = "";
let cart = [];


class Item{
    constructor(name, quantity) {
        this.name = name;
        this.quantity = parseInt(quantity);
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
                case "5":
                    this.viewAmount();
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
            5:  View amounts of each item
        `);
    }
}

let menu = new Menu();
menu.start();
