var text = 'The Batman';

function removeAllVowels(text){
    var newArray = [];
    newArray = text.split(""); 
    
    var removedVowels = [];
    for (i = 0; i < newArray.length; i++){
        switch (newArray[i]){
            case "a":
                break;
            case "e":
                break;
            case "i":
                break;
            case "o":
                break;
            case "u":
                break;                        
            case " ":
                break;
            default:
                removedVowels += newArray[i];    
        }
    }

    return removedVowels.toLowerCase();
}

console.log(removeAllVowels(text));