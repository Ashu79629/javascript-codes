//  classes is also same as constructor

class person{
    constructor(_name, _age){
        this.name = _name;
        this.age = _age;

    }

    welcome(){
        console.log('welcome ashutosh')
    }
}

let person1 = new person("Ashutosh pandey" , 18)

let person2 = new person("steve", 25)


console.log(person1)
console.log(person2)

person1.welcome()