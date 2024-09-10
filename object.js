//  object in js is a key value pair and unorderd way

// var person = {
//     firstName : "ashutosh pandey",
//     secondName : "adam", 
//     age : 18,
//     carOwns : "range rover"
// }



// console.log(person)

// /dot notation

// console.log(person.firstName)

// // bracket notation
// console.log(person['firstName'])

var stranger = {
    firstName : "steve",
    lastName : "harrington",
    age : 23,

    friends : ["eleven", "mike", "nancy", "dustin"],

    address : {
        country : "america",
        state : {
            city : "hawkins"
        } 
        
    }
}

stranger.movies = ["stranger things"]
console.log(stranger.friends[1])
console.log(stranger)