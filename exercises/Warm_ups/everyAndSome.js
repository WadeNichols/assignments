// //Wades Attempt   i was thinking about using strict/double equals for the 
// //every function and then i would use the triple equals to see if some are
// //equal. Im thinkin im wrong as Ben is talking
// const every = (arr, cb) =>{
//     //for loop
//     if arr == str
// }


//Correct answer by Ben

const every = (arr, cb) => {
    for(let i = 0; i < arr.length; i++){
        if(!cb(arr[i])) return false;
    }
    return true;
}

const some = (arr, cb) => {
    for(let i = 0; i < arr.length; i++){
        if(cb(arr[i])) return true;
    }
    return false
}

console.log(every([1,2,'3', 4], cb))