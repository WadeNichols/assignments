var rs = require("readline-sync")

//GAME FUNCTIONS
var player = {
    name: "",
    hitPoingts: 100,
    attackPower: 15,
    inventory: []
}

function Enemy() {
    var names = ["Orc", "Goblin", "Brad", "Chad", "Dragon"]
    var items = ["Potion", "Key", "Gold", "Bananas"]
    this.item = items[Math.floor(Math.random() * items.length)];
    this.name = names[Math.floor(Math.random() * names.length)];
    this.hitPoints = Math.floor(Math.random() * 26 + 50);
    this.attackPower = Math.floor(Math.random() * 6 + 10);
    this.name
}

//GAME LOOP
player.name = rs.question("\nWelcome to RPG-Land! What is your name?\n");

console.log("\nHello, " + player.name + "!\n");

var mainOptions = ["walk", "check stats"];

while(true) {
    var choice = rs.keyInSelect(mainOptions, "\nYou may continure on your journey, or view your player stats");
    if(choice === 0) {
        var runsIntoEnemy = Math.random() < .33333;
        if(runsIntoEnemy) {
            //generate an enemy somehow
            var enemy = new Enemy ();
        
            console.log("oh no, an" + enemy.name " has appreared!");

            var runs = rs.keyInYNStrict("\nDo you want to fight?")
            if (runs === true)
        }
    } else if (choice === 1) {
        //handle check stats
        console.log(player);
        rs.prompt("\nPress any key to continue");
    }
}