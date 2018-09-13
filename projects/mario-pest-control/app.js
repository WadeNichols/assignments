  sumTotal.addEventListener("submit", function(event){
    event.preventDefault()
    var caught1 = +document.getElementById('caught1').value
    var caught2 = +document.getElementById('caught2').value
    var caught3 = +document.getElementById('caught3').value

    var price1 = 5
    var price2 = 7
    var price3 = 11


  var sum1 = price1 * caught1
  console.log(sum2)

  var sum2 = price2 * caught2
    
  var sum3 = price3 * caught3

  var totalSum = sum1 + sum2 + sum3
  console.log(totalSum);
  document.getElementById("score").innerHTML = totalSum
  })
   