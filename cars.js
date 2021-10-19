class Cars {

    constructor(make ,model ,color ,image,registrationNumber,price){

    this.make = make
    this.model = model
    this.color = color
    this.image = image
    this.registrationNumber = registrationNumber
    this.price = price

    }
    editPrice (newPrice){
        this.price = newPrice
    }
    showAll ()
    {
        return `model = ${this.model} ${this.make} ${this.color} ${this.image} ${this.registrationNumber} ${this.price}`
    }
    
}
const car1 = new Cars ('Toyota','camry','red','camry.jpg','12','10000$')
const car2 = new Cars ('Ford','Tures','blue','tures.jpg','133','90000$')
const car3 = new Cars ('GMC','tahue','black','tahue.jpg','122','80000$')
const car4 = new Cars ('hyunday','accent','white','accent.jpg','1432','70000$')
const car5 = new Cars ('honda','accord','brown','accord.jpg','1232','60000$')
console.log(car1.showAll()); 