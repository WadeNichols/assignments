///Higher-Order Functions///

//map (returns new array with changes)
var arr = [1,2,3,4]
var results = arr.map(function(item){
  return item + 10
})


console.log(results);

//filter (out what you want)
var arr = [1,2,3,4,5,6,7,8,9]
var results = arr.filter(function(number){
    return number > 3
})
console.log(results);

//reduce
var arr = [1,2,3,4]
var results = arr.reduce(function(a, b) {
    return a +  b
})
console.log(results)

//sort
var arr = [1,72,43,4,-3,22,-21,-1,0,34,-1]
var results = arr.sort(function(a,b){
    return a - b //(least to greatest)(b - a = greatest to least)
})
console.log(results);

//forEach
var arr = [1,2,3,4]
var results = arr.forEach(function(number, i){
   return arr[i] = number * 10
})
console.log(arr);

FIND
var arr = [1,2,3,4,5,6,7,8,9]
var results = arr.find(function(number){
  return number > 4
})
console.log(results);

//findIndex
var arr = [1,2,3,4]
var results = arr.findIndex(function(number){
  return number > 3
})
console.log(results);

// some
var arr = [1,2,3,4]
var results = arr.some(function(number){
  return number > 5
})
console.log(results);

//every
var arr = [1,2,3,4]
var results = arr.every(function(number){
  return number < 5
})
console.log(results);



// // CONSTRUCTER FUNCTIONS
// function Animal() {
//     this.hasCellWalls = false;
//     this.hasSenses = true;
// }

// Animal.prototype.eat = function() {
//   console.log("NOM NOM NOM");
// }

// function Cat() {
//   Animal.apply(this)
//   this.hasFangs = true;
// }

// Cat.prototype = Object.create(Animal.prototype);
// Cat.prototype.purr = function() {
//   console.log("PURRRRRRRRRR");
// }

// var tom = new Cat();

// tom.purr();

// function User(username, password) {
//   this.username = username;
//   this.password = password;
// }

// username.prototype.authenticate = function(pwdAttempt) {
//   return pwdAttempt === this.password;
// }

// var wade = new User("wadicals73", "password");

// function login(pwdAttempt) {
//   var isAuthenticated = wade.authenticate(pwdAttempt);
//   if(isAuthenticated) {
//     console.log("Welcome to my website!");
//   } else {
//     console.log("403 UNAUTHORIZED ERROR");
//   }
// }
//  login("password");

// var rs = require('readline-sync');

// console.log(rs);

// var userName = rs.question('what is your name?');
// console.log('hello ' + userName + '!');

// var likesToCode = rs.keyInYN('do you like to code?')

// if(likesToCode) {
//     console.log('yay we are friends');

//     var languages = ['javascript', 'java', 'go', 'assebly'];
//     var index = rs.keyInSelect(languages, 'which languages do you prefer?');
//     console.log("that's cool, how long have you been coding with " + languages[index] + "?");

// } else {
//     console.log('booo!');
// }




// var input = document.querySelector('input');

// input.addEventListener('input', function(event) {
//     console.log(this.value);
// })

// var ageInput = document.querySelector('input[name=age]').value
// console.log(ageInput)

// var form = document.querySelector("form");

// form.addEventListener("submit", function(event) {
//     event.preventDefault();
//     console.log(this.name.value, this.age.value)
//     //OR TYPE SEPERATE
//     console.log(this.age.value)
// })


// form.addEventListener("submit", function(event) {
//     event.preventDefault();
//     console.log({
//         name: this.name.value,
//         age: this.age.value
//     })
// })

// console.log(typeof Number(this.age.value))



// function moreMath() {
//     math();
//     var total = 0;
//     for (var i = 0; i < monsters.length; i++) {
//       total = monsters[i].owed + total;
//     }
//     return total;
// }


//WRITTING A FUNCTION

// var form = querySelecctor("form");
// var span = querySelector("span");

// form.addEventListener("submit", function (event) {
//   event.preventDefault();

//   var price = 5;
//   var aty = Number(this.qty.value);
//   var total = price * qty;
//   span.innerHTML = total;
// })


// console.log(this) //or (window)

// document.getElementById('ID')
// or //same thing ^
// document.querySelector('body')

// var pTags = document.querySelectorAll('p')
// console.log(pTags[pTags.length - 1]);

// var input = document.createElement("input");
// var wrapper = document.querySelector(".wrapper")


// input.id = "1";
// input.className = "one";
// input.name = "nice";

// wrapper.prependChild(input)

