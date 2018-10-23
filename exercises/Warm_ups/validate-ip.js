//VALIDATING AN IP ADDRESS   09/02/2018

// // Wades attempt: didnt finish
function validateIp(num) { 
    let newNum = num.split(".")
  
    for(let i = 0; i < num.length; i++)
    if(i === toString('123.123.123.123')){
        return true
    } else
    return false
}
console.log(validateIp('123.123.123.123'))


//CORRECT ANSWER by Dylan Gifford
function validateIp(str) {
    const split = str.split(".");
    if(split.length === 4){
        for (let i = 0; i < split.length; i++) {
            if (split[i] > 255 || !Number(split[i]) || split[i] == 0) return false;
        }
        return true
    }
    return false
}
console.log(validateIp('123.123.d.3'))

//CORRECT ANSWER BY TIM GREY
const validateIp = str => {
    str = str.split(".").map(e => parseInt(e))
    return str.length > 4 || str.length < 4 ? false : str.every(e => e <= 255 && e >= 0 && typeof(e) === "number")
}

//CORRECT ANSWER BY BROOK HORROCKS
const validateIpAddress = (ipAddress) => {
    isValid = false;
    ipAddyArray = ipAddress.split(".");
    if(ipAddyArray.length === 4){
        for(let i = 0; i < 4; i++){
            let currentNum = ipAddyArray[i];
            if(currentNum > 255 || currentNum < 0 || !Number(currentNum) || currentNum === ""){
                isValid = false;
                break;
            } else {
                isValid = true;
            }
        }
    }
    return isValid;
}