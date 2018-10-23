// //PRILIMINARY

// var count = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

// for (var i = 0; i <= 9; i++) {
//     console.log(i)
// }


// var count = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

// for (var i = 9; i >= 0; i--) {
//     console.log(i)
// }


// var fruit = ['banana', 'orange', 'apple', 'kiwi', 'pear', 'peach']

// for (var i = 0; i < fruit.length; i++) {
//     console.log(fruit[i])
// }

// //BRONZE MEDAL

// var nums = [];

// for (var i = 0; i <= 9; i++) {
//     nums.push(i)
// }
//     console.log(nums)


//     for (var i = 0; i <=100; i+=2) {
//     console.log(i)
// }

// var fruits1 = ["banana", "orange", "apple", "kiwi", "pear", "peach"];
// var fruits2 = [];

// for (var i = 0; i < fruits1.length; i++) {
//     if (i % 2 === 1) {
//         fruits2.push(fruits1[i])
//     } else {}
// }
//     console.log(fruits2)


var peopleArray = [
        {
          name: "Harrison Ford",
          occupation: "Actor"
        },
        {
          name: "Justin Bieber",
          occupation: "Singer"
        },
        {
          name: "Vladimir Putin",
          occupation: "Politician"
        },
        {
          name: "Oprah",
          occupation: "Entertainer"
        }
      ]


// for(let i = 0; i < peopleArray.length; i++){
//     console.log(peopleArray.name);
// }

function namesOccupation(){
  var tempNamesArray = [];
  var tempOccupationsArray = [];
for(let i = 0; i < peopleArray.length; i++){
      namesArray.push(peopleArray[i].name)
    }
}
console.log(namesOccupation(peopleArray));
