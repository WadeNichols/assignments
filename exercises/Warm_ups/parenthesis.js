// Wades Attempt

function thesis(str) {
let count = 0;
        for(i=0; i <= str.length; i++){
            if(str[i] === "("){
                count -=1
            } else if(str[i] === ")"){
                count +=1
                    if(count > 0){
                        return false
                    }
            }
        }
    
}

console.log(thesis("()()()()()))))((()()(()()()))"))


//Correct answer by Tim

const parBalance = str => {
    let counter = 0
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "(") {
            counter++
        } else {
            counter--
        }
        if (counter < 0) {
            return false
        }
    }
    if (counter === 0) {
        return true
    } else {
        return false
    }
}

//correct answer by Brooke

const balanceParentheses = str => {
    var counter = 0;
    if(str[0] === "(" && str[str.length - 1] === ")"){
        for(let i = 0; i < str.length; i++){
            str[i] === "(" ? counter-- : counter++;
        }
        return counter === 0 ? true : false;
    }else{
        return false;
    }
}

//correct answer by Dylan

function balance(str) {
    var count = 0;
    for (var i = 0; i < str.length; i++) {
      if (str[i] === "(") count++;
      else if (str[i] === ")") count--;
    }
    if (str[0] === "(" && str[str.length - 1] === ")")
      return count === 0 ? true : false;
    else return false;
  }