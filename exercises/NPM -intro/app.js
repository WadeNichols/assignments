var rs = require('readline-sync');

var name = rs.question("What is your name?\n");
console.log("Hello " + name + ", it is nice to meet you.");

var age = rs.question("How old are you?\n");
    console.log(age)
    if (age === "28") {
        console.log("Holy shit, " + name + "; we're the same age!\n");
    } else {
        console.log("Oh cool, thats a fun age " + name + "!");
    }

var fun = rs.question("What do you like to do for fun?\n");
    console.log(fun.toUpperCase() + "? I'll have to try that some time.");

var detail = rs.question("Can you tell me about yourself?\n");
    console.log("Could you repeat that? All i got was: " + detail.substring(detail.length/2)) 
