// object combines data(PROPERTIES) + functionality(METHODS)

// declare object literals: make up an object's properties and methods

var dvdPlayer = {
    //put key-value pairs here
    height: 3,
    width: 18,
    depth: 12,
    weight: 7,
    color: "blue",
    dvdName: "The Lost City",
    printDVDName: function(){
        console.log(dvdPlayer.dvdName);
    }
    // all the lines above make up the object literal
}


dvdPlayer.printDVDName();

// a METHOD is a function that belongs to an object


console.log(dvdPlayer.color);

// javascript comes with built-in OBJECTS