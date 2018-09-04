var fruits = ['banana', 'apple', 'orange', 'watermelon'];
var vegetables = ['carrot', 'tomato', 'pepper', 'lettuce'];

var vLength = vegetables.length
var fLength = fruits.length

//1.
console.log(vegetables.pop())

//2.
console.log(fruits.shift())

//3.
console.log(fruits.indexOf('orange'))
var indexOfOj = fruits.indexOf('orange');

//4.
console.log("fruits: ", fruits.push(indexOfOj))

//5. 
console.log(vegetables.length)

//6.
console.log(vegetables.push(vegetables.length))

//7.
var food = fruits.concat(vegetables)

console.log(food)

//8.
console.log(food.splice(4,2))

//9.
console.log(food.reverse());

//10.
