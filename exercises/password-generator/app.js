// console.log(Math.floor(Math.random() * 25) + 1);

// console.log(String.fromCharCode(33-126));

  
console.log(String.fromCharCode());

function password(pin) {
  var code = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+=-~[]{}<>\|,./?";

  for (var i = 0; i < pin; i++)
    code += possible.charAt(Math.floor(Math.random() * possible.length));

  return code
}

console.log(password(10));

function generatePassword(length) {
    var password = '';
    var character;
    while (length > password.length) {
        character = String.fromCharCode(Math.floor(Math.random() +95) + 33)
        password += character;
    }
    return password;
}
console.log(generatePassword(10))