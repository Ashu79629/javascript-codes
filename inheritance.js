//  inheritance is a method in which from base class can be passed into derived class

class person{
    constructor(_name, _age){
        this.name = _name;
        this.age = _age

    }
}


class teacher extends person{
    constructor(_name, _age, _strength ){
        super(_name, _age)
        this.strength = _strength

    }
}

class students extends person{
    constructor(_name, _age, _CGPA ){
        super(_name, _age)
        this.CGPA = _CGPA

    }
}

let person1 = new person("maxy", 25)

let teacher1 = new teacher("rakesh saini", 36, 54)

let students1 = new students("ashutosh", 18, 8.04)


console.log(person1)
console.log(teacher1)
console.log(students1)
