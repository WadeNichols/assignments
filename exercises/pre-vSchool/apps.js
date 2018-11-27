var btnText = document.getElementById('btn')

var textBox = function () {
    if (btnText.innerText === "Click for Spanish translation") {
       btnText.innerText = "Lo siento, no hablo Español"
    } else {
        btnText.innerText = "Click for Spanish translation"
    }
}


btnText.addEventListener('click', textBox)


var interests = ['flat soda','people watching; particularly one person','playing guitar', 'Xtream ironing', 'reading', 'crocheting', 'food eating', 'taking long walks on the beach', 'magic', 'burying bodies', 'how i met your mother', 'chasing gaggles of geese', 'watching grass grow', 'mooing at cows']

for (var i = 0; i < interests.length; i++) {
    document.getElementById('list').innerHTML += interests[i] + "<br>"
	console.log(interests[i])
}