var input = document.querySelector('input');

input.addEventListener('input', function(event) {
    console.log(this.value)
})


var addbtn = document.getElementById('add')
function myFunction() {
    var a = document.getElementById('number1').value;
    var b = document.getElementById('number2').value;
    var c = a + b;
    document.getElementById(onclick).innerHTML = c;
}


