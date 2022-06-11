var letterGrade = "F";

if (letterGrade == "A" || letterGrade == "B" || letterGrade == "C" || letterGrade == "D" || letterGrade == "F"){
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
        default:
            console.log("You scored less than 60%");
    }
}
else{
    console.log("The grade entered is invalid.");
}
