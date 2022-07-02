
// My Menu App

class Item{
    constructor(name, position) {
        this.name = name
        this.position = position
    }

    describe(){
        return `${this.name} plays ${this.position}.`
    }
}

class Cart {
    constructor(name){
        this.name = name
        this.allItems = []
    }

    addToCart(item){
        if (item instanceof Item){
            this.allItems.push(item)
        } else {
            throw new Error(`Argument is not an instance of Item. ${item}`)
        }
    }

    describe(){
        return `${this.name} has ${this.allItems.length} players.`
    }
}

class Menu{
    constructor(){
    this.allItems = []
    this.currentItem = null
    }
  
    start(){
        let option = this.showMenu()
  
        while (option != 0){
            switch (option){
                case "1":
                this.createItem();
                break;
                case "2":
                this.viewItem();
                break;
                case "3":
                this.deleteItem();
                break;
                default:
                option = 0;
            }
            option = this.showMenu()
        }
        alert("See ya!")
    }
    showMenu(){
        prompt(`
            Please select one of the following options:
            '0' to exit the application
            '1' to create a new item
            '2' to view an item
            '3' to delete an item
        `)
    }
}

