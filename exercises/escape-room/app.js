var rs = require('readline-sync');
var operations = require('./operations.js')

var name = rs.question('What is your name?\n')
    console.log('Hi ' + name + ' lets get started.')

var options = ['Put hand in hole', 'Look around', 'Open the door', 'Run away']
var gameStart = rs.keyInSelect("Please select an option.\n")
    if (gameStart === 0) {
        console.log("You've died... and you can't ask why because you are dead.\n");
    } else if (gameStart === 1) { 
        console.log("Sounds like a plan; lets get started.\n");
    } else if (gameStart === 2) {
        console.log(name + " jiggles the handle; the door is locked.\n");
    } else (gameStart === 3) 
        console.log(name + " has chosen to flee; you safely escape.\n")


var move1 = rs.keyInYN("Should we take a look arouned?\n")
    if (move1 === true){
        console.log("You get up but fall right back down.")
        console.log("Your head hurts, you must have hit it on something.")
        console.log("You try standing up again, slowly this time")
    } else {
        console.log('fuck off then, ill figure this out alone.')
    }



var options = ['look around', 'open door', ' put hand in hole']
var hasKey = false;
while(true) {
    var selection = rs.keyInSelect(options, "text goes here")
    if(selection === 0) {
        console.log('you look around and see a shiny object on the ground\n');
        var picksUp = rs.keyInYNStrict('Do you pick it up?\n')
            if(picksUp) {
                console.log('you found a key');
                hasKey = true;
            }
    } else if (selection === 1) {
        //do this open door
    } else if (selection === 2) {
        //put hand in hole
    }   break(to break out of loop)
}