const rs = require('readline-sync');

const name = rs.question(`What is your name?\n`);
console.log(`Hello ${name}, It is nice to meet you`)

const age = rs.question("How old are you?\n");
    console.log(age)
    if (age === "28") {
        console.log("Holy shit, " + name + "; we're the same age!\n");
    } else {
        console.log("Oh cool, thats a fun age " + name + "!");
    }

const fun = rs.question("What do you like to do for fun?\n");
    console.log(fun.toUpperCase() + "? I'll have to try that some time.");

const detail = rs.question("Can you tell me about yourself?\n");
    console.log("Could you repeat that? All i got was: " + detail.substring(detail.length/2)) 
