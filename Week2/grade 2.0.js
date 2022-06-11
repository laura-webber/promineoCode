var letterGrade = "V";

if (letterGrade == "A" , "B" , "C" , "D" , "F"){
    switch (letterGrade){
        case "A":
            console.log("You scored 90% or more.");
            break;
        case "B":
            console.log("You scored 80% or more.");
            break;
        case "C":
            console.log("You scored 70% or more.");
            break;
        case "D":
            console.log("You scored 60% or more.");
            break;
        case "F":
            console.log("You scored less than 60%");
            break;
        default:
            console.log("The grade entered is invalid.");
    }
}
