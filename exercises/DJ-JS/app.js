var boxOne = document.getElementById('box-one')

boxOne.addEventListener('mouseover', function() { 
    boxOne.style.backgroundColor = 'blue'
}) 
boxOne.addEventListener('mousedown', function() { 
    boxOne.style.backgroundColor = 'red'
}) 

boxOne.addEventListener('mouseup', function() { 
    boxOne.style.backgroundColor = 'yellow'
}) 

boxOne.addEventListener('dblclick', function() { 
    boxOne.style.backgroundColor = 'green'
}) 

window.addEventListener('wheel', function() { 
    boxOne.style.backgroundColor = 'orangered'
}) 

window.addEventListener('keydown', function (e) {
    if (e.key === 'r')   {
        boxOne.style.backgroundColor = 'red'
    } else if (e.key === 'p') {
        boxOne.style.backgroundColor = 'purple'
    }
})
