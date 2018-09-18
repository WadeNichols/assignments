var button = document.querySelector("button").addEventListener("click", clickCount);
var count = 0
// var counter = function clickCount() {
    //everytime button is click count. i=0 i++

    function clickCount() {
        count++;
        document.getElementById("display").innerHTML = count;
    }
  
