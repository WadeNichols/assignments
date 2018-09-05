var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]
var computerCount = 0
for (var i = 0; i < officeItems.length; i++) {
    if (officeItems[i] === 'computer') {
        computerCount +=1
    }
}
    console.log(computerCount)
    
var peopleWhoWantToSeeMadMaxFuryRoad = [
        {
          name: "Mike",
          age: 12,
          gender: "male"
        },{
          name: "Madeline",
          age: 80,
          gender: "female"
        },{
          name: "Cheryl",
          age: 22,
          gender: "female"
        },{
          name: "Sam",
          age: 30,
          gender: "male"
        },{
          name: "Suzy",
          age: 4,
          gender: "female"
        }
      ] 

      for (var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {
          if (peopleWhoWantToSeeMadMaxFuryRoad[i].gender === 'male') {
              var pronoun = 'him'
          } else {
              var pronoun = 'her'
          }
          if (peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18)  {
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + "'s so fucking old; let " + pronoun + " in.")
          } else {
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + "'s just a baby, keep " + pronoun + " out!")
          }
        }


        var on = false;

        var numOfSwiches = [2, 3, 2];
        for (var i = 0; i < numOfSwiches.length; i++) {
            if (numOfSwiches[i] % 2 !== 0) {
                on = !on;
            }
        }

        console.log(on)