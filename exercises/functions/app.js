// function sum (x, y) {
//     return x + y
// }
//  var x = 5
//  var y = 10

// console.log(sum(x, y));


// function largest(x, y, z) {

//    if (x > y && x > z) {
//         return "mother fuckin " + x + " is the largest"
//    } else if (y > x && y > z) {
//         return "oh damn!, " + y + "'s the shit!"
//    } else (z > x && z > y) 
//        return "looks like " + z + " is satans spawn"
// }

// console.log(largest(1098, 9374, 666))



// function fuckOff (x) {
//      if (x % 2 === 0) {
//         return x + " is even"
//     } else {
//         return x + " is odd"
//     }
// }
//     console.log(fuckOff(8))

function string (str) {
    if (str.length <= 20) {
        return str + str
    } else {
        return str.slice(0, str.length / 2)
    }
}
    console.log(string('0123456789012345678901'))
      
