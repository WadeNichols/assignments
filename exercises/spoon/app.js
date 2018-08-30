var chair = {
    color: ['navy blue', 'grey', 'white', 'chrome'],
    hasWheels: true,
    numberOfWheels: 5,
    name: 'chair',
}

var ben = {
nickName: 'Slim Ben',
 isFemale: false,
 shirtColor: 'maroon',
 pantsColor: 'blue',
 shoes: {
     brand: 'sanuk',
     color: 'grey',
     size: 10.5,
 } ,
 age: 30,
 size: 'slim fit',
 canISay: function () {
    return "is " + this.nickName + "slimmer than a Slim Jim?"
 }
}
 console.log(ben(canISay))

var coffee = {
    isHot: true,
    color: 'white and pink',
}