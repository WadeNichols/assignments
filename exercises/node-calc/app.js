var rs = require("readline-sync");
var operations = require("./operations.js");

var num1 = +rs.question("Enter your first number:\n");

var num2 = +rs.question("Enter your second number:\n");

var options = ["+", "-", "/", "*"]
var index = rs.keyInSelect(options, "Which operation would you like to perform?");
    if (index === 0) {
       console.log("Total: " + operations.sum(num1, num2));
    } else if (index === 1) {
        console.log("Total: " + operations.subtract(num1, num2));
    } else if (index === 2) {
        console.log("Total: " + operations.divide(num1, num2));
    } else if (index === 3) {
        console.log("Total: " + operations.multiply(num1, num2))
    } else {
        console.log("Change your mind? See you next time!")
    }
