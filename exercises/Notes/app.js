// var rs = require('readline-sync');

// console.log(rs);

// var userName = rs.question('what is your name?');
// console.log('hello ' + userName + '!');

// var likesToCode = rs.keyInYN('do you like to code?');

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



function moreMath() {
    math();
    var total = 0;
    for (var i = 0; i < monsters.length; i++) {
      total = monsters[i].owed + total;
    }
    return total;
}