array = ['Hello', 'racEcar', 'bAnAnA'];
newArray = '' + " ";

for (var i = 0; i < array.length; i++) {
        c = array[i];
    if (c == c.toUpperCase()) {
        newArray += c.toLowerCase();
    } else if (c == c.toUpperCase()) {
        newArray += c.toUpperCase();
    } else {
        newArray += c;
    }
}

console.log(newArray)


function antiCaps(char) {
    return ([/a-z]).test(char) ? char.toUpperCase(): char.toLowerCase();
}

var str = "THis WIll be My strinG",
    str1 = '';

function convertCaps(str) {
    var output = '';
    for (var i = 0; i < str.length; i++) {
        str1 += antiCaps(str[i])
    }
    return output;
}
console.log(convertCaps(str));

// function antiCaps() {
//     var array = ['Hello', 'racEcar', 'bAnAnA'];
//     var switch = array.toUpperCase()
//     var newArray = switch.toLowerCase()


// console.log(newArray)

