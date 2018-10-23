//Tim's answer
const shuffle = arr => {
    let output = []
    while (arr.length > 0) {
        let i = Math.floor(Math.random() * arr.length)
        output.push(arr[i])
        arr.splice(i, 1)
    }
    return output
}

//Brookes answer
const arrayShuffler = arr => {
    const originalArrLength = arr.length;
    const output = [];
    for(let i = 0; i < originalArrLength; i++){
        currentElement = Math.floor(Math.random() * (arr.length - 1));
        output.push(arr[currentElement]);
        arr.splice(currentElement, 1);
    }
    return output;
}

//Wades attempt :(
function shuffle(arr) = {
    for(let i=0; i <= arr.length; i++){

    }
}


