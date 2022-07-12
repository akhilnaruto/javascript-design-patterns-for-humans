/*
 Lion interface
 roar()

*/

class AfricanLion{
    roar(){

    }
}

class AsianLion{
    roar(){
        
    }
}

//And hunter expects any implementation of Lion interface to hunt.

class Hunter{
    hunt(lion){
        lion.roar();
    }
}

//lets say now we have to add a wildDog so that hunter can hunt that too., 
// we cannot do that as dog has different interface, to make it compatibale
// with our hunter, we will have to create an adapter

class wildDog{
    bark(){

    }
}

class WildDogAdapter{
    constructor(dog){
        this.dog = dog;
    }

    roar(){
        this.dog.bark();
    }
}

var wildDog = new WildDog();
var wildDogAdapter = new WildDogAdapter();

hunter = new Hunter();
hunter.hunt(wildDogAdapter);