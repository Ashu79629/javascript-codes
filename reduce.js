//  program to add numbers with conditonal statements

let num = [1,2,3,4,5,6,7]

// sum = 0

// for(i=0; i<num.length; i++){
//     sum = sum+num[i]
// }

// console.log(sum)

// by reduce method

// let result = num.reduce(function(acc, value){
//     let nextSum = acc + value
//     return nextSum

// } , 0)

// console.log(result)


//  multiply with reduce method
let result = num.reduce(function(acc, value){
    let nextProduct = acc * value
    return nextProduct

} , 1)

console.log(result)