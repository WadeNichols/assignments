var shopper = {
    male: true,
    firstName: 'Wade',
    lastName: 'Nichols',
    store: 'Target',
    time: 1500,
    groceryCart: ['bananas', 'bread', 'milk', 'butter', 'vodka', 'digorno pizza', 'apple juice'],
    greeting: function () {
        return "hi, my name is..." + " " + this.firstName + ", " + "mother fuckin" + ", " + this.lastName;
    }
}

console.log(shopper.greeting())