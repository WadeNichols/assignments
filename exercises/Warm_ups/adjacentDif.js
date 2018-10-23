//Correct andswer by Ben
const adjDif = arr => {

}



//Wades Attempt

function adjacent(arr){
    let total = 0
    let indexOfLongest = 1;
    for(let i = 1; i < arr.length - 1; i++){
        const totalCurrentLength =  arr[i - 1].length + arr[i].length + arr[i + 1].length > indexOfLongest
        if (totalCurrentLength > total){
            total = totalCurrentLength;
            indexOfLongest = i
        }
    }
    return arr.slice(indexOfLongest - 1, indexOfLongest + 2);
}

console.log(adjDif(["this", "is", "an", "array"]));

