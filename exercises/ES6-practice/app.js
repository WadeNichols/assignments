const name = 'John'
const age = 101
const pets = ["cat", "dog"]

const petObjects = []

for (let i = 0; i < pets.length; i++){
  const pet = {type: pets[i]}
  if (pets[i] === "cat"){
    let name = "fluffy"
  } else {
    let name = "spot"
  }
  pet.name = name
  petObjects.push(pet)
}

function doMathSum(a,b){
    return a + b
}
var produceProduct = (a, b) => ({a, * b()})