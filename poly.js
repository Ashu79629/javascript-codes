class animals{

    sound(){
         console.log("all animals have different voice")
    }
}



class dogs{
    sound(){
        console.log("dogs barks")
    }
}


class cats{
    sound(){
        console.log("cats mews")
    }
}

 let animals1 = new animals()
 animals1.sound()


let peter = new dogs()
peter.sound()


let meshu = new cats()
meshu.sound()