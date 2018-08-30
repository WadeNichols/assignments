if (5 > 3) {
    console.log("is greater than")
}
 
if ('cat' === 3) {
    console.log("is the length")
}

if ('cat' === 'dog') {
    console.log("they are the same")
} else ('cat' !== 'dog'); {
    console.log("they are not the same")
};

var person = {
    name: 'Brandon',
    age: 50
}
//old enough?
if (person.age >= 18) {
    console.log(person.name + ' is allowed to go to the movie')
} else {
    console.log(person.name + ' is NOT allowed to go to the movie')
}

//name starts with B
if (person.name[0] === 'B') {
    console.log(person.name + ' is allowed in the movie')
} else {
    console.log(person.name + ' can go home')
}

//B namd and of age
if ((person.name[0] === 'B') && (person.age >= 18)) {
    console.log(person.name + 'is ' + person.age + ' years old and allowed')
}
