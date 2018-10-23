var rs = require("readline-sync")
var y = true
var gameOn = true

var amp = {
    name: "Amp",
    points: 35
}
var pedal = {
    name: "Distortion Pedal",
    points: 30
}
var pick = {
    name: "Guitar Pick",
    points: 10
}
var strap = {
    name: "Guitar Strap",
    points: 10
}
var microphone = {
    name: "Microphone",
    points: 25
}
var strings = {
    name: "Pack of nickle wound strings",
    points: 10
}
var tuner = {
    name: "Guitar tuner",
    points: 15
}

//GAME FUNCTIONS
var player = {
    name: "",
    idolStatus: 100,
    talent: 15,
    inventory: [],
    gigs: 0
}

//Enemy
function Band() {
    var names = ["New Found Glory", "A Day To Remember", "blink-182", "Green Day", "No Doubt", "Neck Deep", "Fall Out Boy", "Sum 41", "Twenty One Pilots"]
    var items = [amp.name, pedal.name, pick.name, strap.name, microphone.name, strings.name, tuner.name]
    this.item = items[Math.floor(Math.random() * items.length)];
    this.name = names[Math.floor(Math.random() * names.length)];
    this.idolStatus = Math.floor(Math.random() * 50 + 10);
    this.talent = Math.floor(Math.random() * 6 + 10)
}

//GAME LOOP
player.name = rs.question("\nWelcome to Warped Tour; What is your name?\n");

console.log(`\n .... That's kind of a shitty name. But hey, if you want me to call you ${player.name} then i will.`);

var mainOptions = ["Check out the bands", "Check Status", "Use items in inventory"];
while(gameOn) {
    var choice = rs.keyInSelect(mainOptions, "\nYou may continue on your journey, or view your player stats");
    if(choice === 0) {
        var bumpsIntoBand = Math.random() < .33333; 
        var band = new Band ();
        console.log("You've run into "+band.name)
        console.log(band.name+"'wants to battle for the main stage....")
        var play = rs.keyInYN("Are you ready to rock?")
            if (play === y) {
                play = true;
                console.log("You take the stage and you play for the crowd");
                while(band.idolStatus > 0 && player.idolStatus > 0){
                    band.idolStatus -= player.talent;
                    player.idolStatus -= band.talent
                }
            if(player.idolStatus <= 0) {
                console.log("You've been kicked out of Wrapped Tour")
                break;
            }else{
                player.inventory.push(band.item)
                console.log(band.name + " lost the battle and you've won " +band.item)
                player.gigs += 1;
            }
            if(player.gigs >= 5){
                gameOn = false
                console.log("You've mad it big and now have a RECORD DEAL!!! Rock on!!!")
            }
            if(player.idolStatus >= 170){
                gameOn = false;
                console.log("You've made it to the big times, come get that RECORD DEAL!!")
            }
        }
    } else if (choice === 1){
        console.log(player);
        rs.prompt("\nPress any key to continue")
    } else if (choice === 2){
        var useItem = rs.keyInYN("Would you like to boost your Idol Status?")
        if (useItem){
            console.log("Which addon would you like to use to become a star?")
            var boost = rs.keyInSelect(player.inventory,'Please choose your boost.')
        }
        if (player.inventory[useItem] === 'Amp'){
            player.idolStatus += amp.points
            console.log(`Your idol status is now at ${player.idolStatus}`)
        }else if (player.inventory[useItem] === "Distortion Pedal"){
            player.idolStatus += pedal.points
            console.log(`Your idol status is now at ${player.idolStatus}`)
        }else if (player.inventory[useItem] === 'Guitar Pick'){
            player.idolStatus += +pick.points
            console.log(`Your idol status is now at ${player.idolStatus}`)
        }else if (player.inventory[useItem] === "Guitar Strap"){
            player.idolStatus+= +strap.points
            console.log(`Your idol status is now at ${player.idolStatus}`)
        } else if (player.inventory[useItem] === "Microphone"){
            player.idolStatus += microphone.points
            console.log(`Your idol status is now at ${player.idolStatus}`)
        } else if (player.inventory[useItem] === "Pack of nickle wound strings"){
            player.idolStatus += strings.points
            console.log(`Your idol status is now at ${player.idolStatus}`)
        } else (player.inventory[useItem] === "Guitar Tuner");{
            player.idolStatus += tuner.points
            console.log(`Your idol status is now at ${player.idolStatus}`)
    }
}}
