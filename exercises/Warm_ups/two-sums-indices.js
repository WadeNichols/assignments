//Correct answer by Tim
const twoSum = (arr, sum) => {
    for (let i = 0; i < arr.length; i++) {
        for (let x = i + 1; x < arr.length; x++) {
            if (arr[i] + arr[x] === sum) return [i, x]
        }
    }
}

// //correct answer by Brooke
// const twoSum = (arr, num) => {
//     const output = [];
//     for(let i = 0; i < arr.length; i++){
//         for(let j = i+1; j < arr.length; j++){
//             if(arr[i] + arr[j] === num){
//                 output.push(i, j);
//                 return output;
//             }
//         }
//     }
//     return "No numbers adding up found";
// }


// //Wades Attempts

// const twoSum = (arr, num) => {
//     for(let i = 0; i < arr.length; i++){
//         let newNum = arr[i] + arr[i++] 
//         if (newNum === num) {   
//             return arr[i]
//         } else {
//             return fasle
//         }
//     }
// }
// console.log(twoSum([1,2,3], 4))


//loop through the array
// compare two indices and see if they are equal to the num
//return the index of array
