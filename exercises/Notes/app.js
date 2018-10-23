




const es6Method = () => console.log(this);

console.log([1,2,3,4,5].filter(x => x % 2));

class Element{
    constructor(id, name, className, innerHTML){
      this.id = id;
      this.name = name;
      this.className = className;
      this.innerHTML = innerHTML;
      this.style = {
          fontSize: "12px"
    }
  }
  onHover(e){
    console.log("you hoverer you!");
  }
}
class H1 extends Element {
  constructor(tag, id, name, className, innerHTML){
    super(tag, id, name, className, innerHTML);
    this.style = {
        fontSize: "18px"
    }
  }
}


const div = new Element(1, "demo", "example-class", "lorem ipsum");
const h1 = new H1(1, "demo", "example-class", "lorem ipsum");

//template literals
const name =  "Ben";
const occupation = "Instructor";
console.log(`my name is ${name} and i am an ${occupation}`)
//object literal
const key1 = value1
const key2 = value2

const obj = {
  key: value1,
  key2: value2,
  nestedObj: {
    nestedKey: "nested value"
  }
}
const { key, key2, nestedObj: {key} } = obj;

console.log(key1, key2, nestedObj)


const arr = [1,2,3,4]

const person = {
  name: "ben",
  occupation: "instructor"
}
//same as ^ but new way
function getPerson({name, occupation}) {
  console.log(name, occupation)
}

//making changes to arrays and objects

const obj = {
  key: "value",
  key1: "value1"
}
const newObj = {
  ...obj,
  key: "newValue"
}

const arr = [1, 2, 3];
const newArr = [-1, 0, ...arr, 4, 5];

console.log(arr, newArr);

const listArgs = (...args) => {
  console.log(args);
}
listArgs(listArgs(1, 2, 3, {key: "value"}, "test", true, null))



// const vowelCount = (str) => {
//   const vowels = "a,e,i,o,u";
//   let count = 0;
//   for(let i = 0; i < str.length; i++){
//     if (vowels.includes(str[i])){
//       count++;
//     }
//   }
//   return count;
// }
// vowelCount('celebration');

// const findSmallest = arr =>{
//   let temp = arr[0]
//   for(let i = 1; i < arr.length; i++){
//     if(arr[i] < temp){
//       temp = arr[i]
//     }
//   }
// }
// console.log(findSmallest([1,5,30,73,-2,0,-1,23,-31]))

// function shuffleName(str){
//   let newStr = str.split(" ");
//   newStr.reverse();
//   return newStr.join(" ");
// }
// console.log(shuffleName("Donald Trump"));



// class Animal {
//   constructor() {
//     this.hasCellWalls = false
//     this.name = name;
//   }
//   eat(){
//     console.log("NOM NOM");
//   }
// }

// class Mammal extends Animal{
//   constructor(name){
//     super(name); 
//   }
// }


// }
// function Animal(){
//   this.hasCellWalls = false;
// }

// Animal.prototype.eat = function(){
//   console.log("NOM NOM");
// }

// const rhino = new Mammal();
// console.log(rhino)

// function Mammal(){
//   Animal.call(this);
//   this.hasFur = true;
// }

// Mammal.prototype = Object.create(Animal.prototype);
// Mammal.givesLiveBirth = function(){
//   console.log("its a boy!");
// }

// ///ES6
// // let: you can change this
// // const: stays consistent and doesn't change
// function nonArrow() {

// }

// const arrow = () => {

// }
// //no parameters
//  () => {

// }

// //one parameters
// param => {

// }
// //multi parameters
// (p1, p2) => {

// }

// //single line return
// const sum = (x, y) => x + y;
// //single line return object
// const obj = (key1, key2) => ({key1, key2})
// //multi line
// const multiLineReturn = () => {
//   if(true) {
//     console.log("i cant fit it on one line");
//     return "use normal return statement"
//   }
// }



// const bubbleGumMachine = {
//   flavors: [{
//     color: 'blue',
//     price: 20
//   },{
//     color: 'yellow',
//     price: 10
//   },{
//     color: 'green',
//     price: 15,
//   },{
//     color: 'pink',
//     price: 17
//   }],
//   amt: 15,
//   selectFlavors: function(){
//     const self = this
//     return this.flavors.filter((flavor) => {
//       return flavor.price <= self.amt;
//     })
//   }
// }
// console.log(bubbleGumMachine.selectFlavors());



// const person = {
//   name: "Ben",
//   occupation: "Teacher",
//   speak: function() {
//     return "I'M BEN!!!!!";
//   }
// }
// // console.log("hello " + person.name + ", I see you are a " + person.occupation + ".");
// console.log(`Hello ${person.name}, I see you are a ${person.occupation}`)
// console.log(`Two plus two = ${2 + 2}`);

// console.log(`Hey ben, whats up? Ben says: ${person.speak()}`)

// //Spread Operator//
// const numbers = [1,2,3];
// const moreNumbers = [4,5,6]

// console.log([...numbers, ...moreNumbers]);
// console.log(numbers.concat(moreNumbers));

// var numbers2 = [1,2,3,4,5];
// console.log(Math.max(...numbers));

// function sum(...args) { //(...args means use list of arguments provided)
//   return args.reduce(function(total, x){
//     return total + x;
//   })
// }

// console.log(sum(1,2,3,4,5,6,7))

// function Enemy(name, hp, attack) {
//   this.name = name;
//   this.hp = hp === undefined ? 60 : hp;
//   this.attack = attack === undefined ? 15 : attack;
// }

// console.log(new Enemy("Dragon"));

// //or ...//

// function Enemy(name, hp = 100, attack = 20){
//   this.name = name;
//   this.hp = hp;
//   this.attack = attack;
// }
// console.log(new Enemy("Wizard"));

// function exponents()







//EXPECTED VALUE
//ACTUAL VALUE

//RUN THE TEST
// COMPARE THE ACTUAL VALUE WITH THE EXPECTED VALUE
// VIEW RESULTS
// MAKE CHANGES IF NECESSARY

// function assert(actual, expected) {
//   if(actual !== expected) {
//     throw ({type: "FAIL", actual: actual, expected: expected});
//   } else {
//       console.log({type: "SUCCESS", actual: actual, expected: expected})
//   }
// }

// function sum(x, y){
//   return x + y;
// }

// var cases = [{
//   toTest: sum,
//   args: [2, 3],
//   expected: 5
// }]

// function describe(message, func){
//   console.log(message);
//   for(var i = 0; i < cases.length; i++){
//     try{
//         assert(func(3, 10), 13 )
//     } catch(err) {
//         console.log(err);
//     }
//   }
// }


// describe("testing sum function", sum)



// function sum(x, y) {
//   try {
//     if (typeof x !== "number" || typeof y !== "number") {
//       throw "ERROR: Inputs must be numbers!";
//     }
//     return x + y;
//   }
//   catch (err) {
//     console.log(err);
//   }
// }
// console.log(sum(5, 3));




// //PASSWORD
// var user = {
//   username: "wade",
//   password: "fuck off"
// }

// function authenticate(username, pwdAttempt){
//   if(user.username !== username) {
//       throw Error("Hey shithead use the right username!")
//   }
//   if(pwdAttempt !== user.password) {
//     throw Error("That is the wrong password dummy face");
//   }
//   return {
//     authenticated: true,
//     data: user.data
//   }
// }
// function login(username, pwdAttempt, user) {
//   try{
//       return authenticate(username, pwdAttempt);
//   } catch(err){
//         console.log(err.message);

//   }
// }

// console.log(login("wade", "fuck off"));



// //try and catch//
// try {
//   throw typeError ("message error")
// } catch(err){
//   console.log(err.message);
// }

// ///Higher-Order Functions///

// //map (returns new array with changes)
// var arr = [1,2,3,4]
// var results = arr.map(function(item){
//   return item + 10
// })


// console.log(results);

// //filter (out what you want)
// var arr = [1,2,3,4,5,6,7,8,9]
// var results = arr.filter(function(number){
//     return number > 3
// })
// console.log(results);

// //reduce
// var arr = [1,2,3,4]
// var results = arr.reduce(function(a, b) {
//     return a +  b
// })
// console.log(results)

// //sort
// var arr = [1,72,43,4,-3,22,-21,-1,0,34,-1]
// var results = arr.sort(function(a,b){
//     return a - b //(least to greatest)(b - a = greatest to least)
// })
// console.log(results);

// //forEach
// var arr = [1,2,3,4]
// var results = arr.forEach(function(number, i){
//    return arr[i] = number * 10
// })
// console.log(arr);

// FIND
// var arr = [1,2,3,4,5,6,7,8,9]
// var results = arr.find(function(number){
//   return number > 4
// })
// console.log(results);

// //findIndex
// var arr = [1,2,3,4]
// var results = arr.findIndex(function(number){
//   return number > 3
// })
// console.log(results);

// // some
// var arr = [1,2,3,4]
// var results = arr.some(function(number){
//   return number > 5
// })
// console.log(results);

// //every
// var arr = [1,2,3,4]
// var results = arr.every(function(number){
//   return number < 5
// })
// console.log(results);



// // CONSTRUCTOR FUNCTIONS
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
//   console.log("PURR");
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

//     var languages = ['javascript', 'java', 'go', 'assembly'];
//     var index = rs.keyInSelect(languages, 'which languages do you prefer?');
//     console.log("that's cool, how long have you been coding with " + languages[index] + "?");

// } else {
//     console.log('boo!');
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
//     //OR TYPE SEPARATE
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


//WRITING A FUNCTION

// var form = querySelector("form");
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
// input.id = "1";}
// input.className = "one";
// input.name = "nice";

// wrapper.prependChild(input)

