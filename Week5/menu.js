
// My Menu App

class Item{
    constructor(name, quantity) {
        this.name = name;
        this.quantity = parseInt(quantity);
    }

    describe(){
        return `You want ${this.quantity} of ${this.name}.`;
    }
}


//let items = [];
let items = "";
let cart = [];

function addItemToCart(){
    let chosenItem = new Item(prompt("Enter the name of the item you want to buy: "), prompt(`Please enter the amount you would like.`));
    while(chosenItem.quantity <= 0){
        chosenItem.quantity = prompt(`Please enter an amount greater than 0.`);
    }
    alert(`You added ${chosenItem.quantity} ${chosenItem.name}(s) to your cart.`);
    items = chosenItem.name;
    cart.push(items);
}

function viewCart(){
    //alert(items);
    if(cart.length == 0){
        alert("You haven't added any items to your cart.")
    } else {
        //let i = 0;
        alert(`You have in your cart: ${cart}`);
        
    }  
} 

function removeItemFromCart(){
 
 //alert(`You have in your cart: ${cart}`);
 let item = prompt(`Which item do you want to remove? 
 ${cart}`);
 cart = cart.filter(element => element != `${item}`);
 alert(`You have in your cart: ${cart}`);
}

// function viewAmount(){

// }

class Menu extends Item{
    constructor(name, quantity){
        super(name,quantity);

    }
    
    start(){
        let option = this.showMenu();
        
        while (option != 0){
            switch (option){
                case "1":
                    addItemToCart();
                    break;
                case "2":
                    viewCart();
                    break;
                case "3":
                    removeItemFromCart();
                    break;
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
        `);
    }
}

let menu = new Menu();
menu.start();


