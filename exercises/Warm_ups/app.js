


// function checkTypes(arr) {
//     var arrType = typeof arr[0][0]
//     for(var i = 1; i< arr.length; i++){
//       for(var y = 0; y < arr[i].length; y++){
//       if(typeof arr[i][y] !== arrType) return false
//       }
//     }
//     return true
//   }
// console.log(checkTypes([[false, false, true], [true, true, true]]));



// // const multTable = (x) => {
// //     const output = [];
// //     for(let r = 1; r <= x; r++){
// //         output.push([]);
// //         for(let c = 1; c <= x; c++){
//             output[r - 1].push(r * c)
//         }
//     }
//     return output;
// }
// console.log(multTable(13));

// function decode(str) {
//     output = [];
//     const  newStr = str.split(" ");
//     for (i = 0; i < newStr.length; i++){
//         if (newStr.includes(newStr[i], i+1) && !output.includes(newStr[i])){
//             output.push(newStr[i])
//         }
//     }
//     return output;
// }
// console.log(decode("Banh mi pull skateboard ipsum lorem, kombucha scenester banjo. Franzen mlkshk consequat, PBR&B lever lever listicle irony pop-up sriracha on the saliva. Shabby on chic eu iceland far next level far lever pull drinking the right vinegar fanny pack pull minim right chicharrones migas."));



// const matchWords = str => {
//     const toArray = str.split(" ");
//     const count = {};
//     const output = [];
//     for(let i = 0; i < toArray.length; i++){
//         if(!count[toArray[i]]){
//             count[toArray[i]] = 1;
//         } else if(count[toArray[i]] === 1){
//             count[toArray[i]]++;
//             output.push(toArray[i]);
//         }
//     }
//     return output;
// }

// console.log(matchWords('Banh mi pull skateboard ipsum lorem, kombucha scenester banjo. Franzen mlkshk consequat, PBR&B lever lever listicle irony pop-up sriracha on the saliva. Shabby on chic eu iceland far next level far lever pull drinking the right vinegar fanny pack pull minim right chicharrones migas.'))


// //MissingNo.//

// var array = [3,2,1,5,8,7,0]
// var newArr = array.sort(function(a,b){return a-b})

// function findMissing(newArr)  { 
//     for(var i = 1; i < newArr.length; i++) {
//         if(i !== newArr[i - 1]) {
//             return i
//         }
//     }
//     return newArr + 1
// }



// console.log(findMissing(newArr));


//PALINDROME//

// function palindrome(str){
//     const regEx=/[\W_]/g;
//     const lowRegStr = str.toLowerCase().replace(regEx, '');
//     const reverseStr = lowRegStr.split('').reverse().join('');
//     return reverseStr === lowRegStr;
// }

// console.log(palindrome("303Racecar303"));


// function palindrome2(str){
//     const regEx2 = /[^A-Za-z0-9]/g;
//     str = str.toLowerCase().replace(regEx2, '');
//     const len = str.length;

//     for(let i = 0; i< len/2; i++){
//         if (str[i] !== str[len - 1 - i]){
//             return false;
//         }
        
//     }
//     return true;
// }
// console.log(palindrome2("A man a plan, a canal. Panama"));