// blueprint for student

// class Student {
//     constructor() {
//         this.firstName = 'Sam'
//         this.lastName = 'Smith'
//         this.phoneNumber = '5555555'
//         this.grade = 'A'
//     }
// }

class Student {
    constructor(firstName, lastName, phoneNumber, grade) {
        this.firstName = firstName
        this.lastName = lastName
        this.phoneNumber = phoneNumber
        this.grade = grade
    }

    // methods (function that belongs to an OBJECT/CLASS)
    introduce() {
        console.log(`${this.firstName} ${this.lastName} can be reached at ${this.phoneNumber}`)
    }
}

let student1 = new Student('Tom', 'Sawyer', '44444444', 'B')
let student2 = new Student('Bob', 'Smith', '33333333', 'F')

student1.introduce()
student2.introduce()

class PromotionSender {
    constructor(){

    }

    sendNotification(notification){
        console.log('Sending: ' + notification);
    }

    findUsesWithStatus(status){
        let users = getUsers(status)
        return users
    }

    calculateDiscount(status){
        if (status === 'GOLD'){
            return .3

        } else if (status === 'SILVER') {
            return .15
        } 
        return 0
    }
}

class CollectionsSender {
    constructor(){

    }

    sendNotification(notification){
        console.log('Sending: ' + notification);
    }

    findUsesWithStatus(status){
        let users = getUsers(status)
        return users
    }

    calculateFee(status){
        if (status === 'OVERDUE'){
            return 10

        } else if (status === 'DELINQUENT') {
            return 25
        } 
        return 5
    }
}