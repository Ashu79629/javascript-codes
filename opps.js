// constructor fn in js is like a template in js 

function CreateCar(_name, _company, _color){
    this.name = _name;
    this.compamy = _company;
    this.color = _color

}

let car1 = new CreateCar("G-Wagon", "Mercedes", "grey")

let car2 = new CreateCar("rangerover", "rangerover", "black")


let car3 = new CreateCar("Fourtuner", "Toyota", "black")



console.log(car1)

console.log(car2)


console.log(car3)
