function printFirstname(firstname, cb){
    console.log(firstname)
    cb('pandey')

}


function printLastname(lastname){
    console.log(lastname)
}

printFirstname('ashu', printLastname )

