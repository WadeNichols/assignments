// function char_count(str, letter) {
//     var letter_Count = 0;
//     for (var i = 0; i < str.length; i++) {
//         if (str.charAt(i) === letter) {
//             letter_Count += 1;
//         }
//     }

//     for(var key in count){
//         console.log(key);
//     }
//     return letter_Count;
// }
// // countTotal("testing counter")
// console.log(char_count("The quick brown fox jumped over the lazy dog. The lazy dog barked at the quick brown fox", 'o'))


var phrase = "slimy smelly solution";

function arrayIndex(str) {
    var charCounterObj = {
        noDupesString: "",
    };
    for(var i = 0; i<str.length; i++)
    if(charCounterObj[str[i]] === undefined) {
        charCounterObj[str[i]] = 1;
        charCounterObj.noDupesString += str[i];
    } else {
        charCounterObj[str[i]]++;
    }
    return charCounterObj
}
console.log(arrayIndex(phrase));