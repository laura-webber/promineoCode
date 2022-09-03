
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

class Cart extends Item{
    constructor(name, quantity){
        super(name,quantity);
        this.itemsInCart = [];
    }

    addToCart(item){
        if (item instanceof Item){
            this.itemsInCart.push(item);
        } else {
            throw new Error(`Argument is not an instance of Item. ${item}`);
        }
    }

    describe(){
        return `Your shopping cart ${this.name} has ${this.itemsInCart.length} items.`;
    }
}


let items = [];

function addItemToCart(){
    let chosenItem = new Item(prompt("Enter the name of the item you want to buy: "), prompt(`Please enter the amount you would like.`));
    while(chosenItem.quantity <= 0){
        chosenItem.quantity = prompt(`Please enter an amount greater than 0.`);
    }
    alert(`You added ${chosenItem.quantity} ${chosenItem.name}(s) to your cart.`);
    items += chosenItem;
}

function viewCart(){
    alert(items.length);
    for(i = 0; i < items.length; i++)
    {
        alert(`Your shopping cart has the following items: ${items[i].name}.`);
    }   

   
}

function removeItemFromCart(items){
 //   let removedItems = items.splice()
}

class Menu extends Item{
    constructor(name, quantity){
        super(name,quantity);
        let items = [];
    }
    

    start(){
        let option = this.showMenu();
        
        while (option != 0){
            switch (option){
                case "1":
                    addItemToCart();
                    break;
                case "2":
                    viewCart(items);
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
            Please select one of the following options:
            '0' to exit the application
            '1' to enter the name of the item you want to buy
            '2' to view items in your cart
            '3' to remove an item from your cart
        `);
    }

}


let menu = new Menu();
menu.start();


