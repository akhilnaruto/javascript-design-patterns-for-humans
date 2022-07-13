/**
 * Realworld example:
 * Image you run a car service shop offering multiple services.
 * how do you cal the bill charged?
 *   you pick one service and dynamically keep adding to it the prices for the provided services
 *   til you get the final cost. here each type of service is decorator
 * 
 * 
 * Decorator pattern lets you dynamically change the behavior of an object at runtime
 * by wrappiung them in an object of decorator class
 */


/**
 * Coffie Interface
 * getCost()
 * getDescription()
 */

class SimpleCoffee{
    getCost(){
        return 10;
    }

    getDescription(){
        return `Simple Coffee`;
    }
}

class MilkCoffee{
    constructor(coffee){
        this.coffee = coffee;
    }

    getCost(){
        return this.coffee.getCost() +2;
    }

    getDescription(){
        return `${this.coffee.getDescription()}, Milk`;
    }
}

class WhipCoffee{
    constructor(coffee){
       this.coffee = coffee;
    }

    getCost(){
        return this.coffee.getCost() +5;
    }

    getDescription(){
        return `${this.coffee.getDescription()}, whip`
    }
}

class VanillaCoffee{
    constructor(coffee){
        this.coffee = coffee;
    }

    getCost(){
       return this.coffee.getCost() +3;
    }

    getDescription(){
        return `${this.coffee.getDescription()}, Vanilla`
    }
}

let someCoffee;

someCoffee = new SimpleCoffee();
console.log(someCoffee.getCost());
console.log(someCoffee.getDescription());

var milkCoffie = new MilkCoffee(someCoffee);
console.log(milkCoffie.getCost());
console.log(milkCoffie.getDescription());

var whipCoffee = new WhipCoffee(someCoffee);
console.log(whipCoffee.getCost());
console.log(whipCoffee.getDescription());

var vanillaCoffee = new VanillaCoffee(someCoffee);
console.log(vanillaCoffee.getCost());
console.log(vanillaCoffee.getDescription());