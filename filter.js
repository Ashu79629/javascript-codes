//  print even number by conditional statements


// let num = [1,2,6,8,10,45,32,68,22,56,89,97]

// let evenNUM = []


// for(i=0; i<num.length; i++){
//     if(num[i]%2==0)
//         evenNUM.push(num[i])
// }

// console.log(evenNUM)



// by filter method

const num = [1,2,4,5,68,79,56,42]
const evenNumbers = num.map(function(n){
    return n%2==0

})
console.log(evenNumbers)
