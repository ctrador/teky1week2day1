// Chad Trador, Izaak, Date

// Problem 1 

var numArray = [18, 24, 57, 98, 45, 27, 3, 456, 3, 35, 85];
var p27 = numArray.indexOf(27);
console.log(p27)


// Problem 2 
var num = 0;

for (var i = 0; i < numArray.length; i++) {
    num += numArray[i];
    
}

var total = num;

console.log(total)

// Problem 3

var newArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

newArray.pop();

console.log(newArray);

// Problem 4 


function add(num1, num2) {

    if (num1 + num2  <= 25 ) {

       console.log("true");

    } else {

        console.log("false");
    }
}
add(10, 16);

// Problem 5 

    var sumArray = numArray.concat (newArray);

    if (sumArray.length > 12) {

        console.log("Error, string too long.");

    } else {

        console.log(sumArray);
    }
 
    

// Problem 6

var counter = 0;

while(counter <= 20){

console.log(counter);

if (counter <= 5) {

    console.log("very low number");

}if (counter <= 10 && counter > 5) {

    console.log("low number");

}if (counter <= 15 && counter > 10) {

    console.log("High Number");
}
if (counter > 15)  {

    console.log("Very High Number");
    
}

    counter = counter + 1;
        
    }
    
// or Problem 6 out number only output
var counter = 0;

while(counter <= 20){

if (counter <= 5) {

    console.log("very low number");

}if (counter <= 10 && counter > 5) {

    console.log("low number");

}if (counter <= 15 && counter > 10) {

    console.log("High Number");
}
if (counter > 15)  {

    console.log("Very High Number");
    
}
counter = counter + 1;
        
    }
;