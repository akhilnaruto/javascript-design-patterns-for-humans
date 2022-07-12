/**
 * Allows you to create different flavors of an object while avoiding constructor pollution.
 * Useful when there could be several flavours of an object or when there are lot of
 * steps are involved in creation of an object
 */

class Burger{
    constructor(builder){
        this.size = builder.size;
        this.cheeze = builder.cheeze || false;
        this.pepperoni = builder.pepperoni || false;
        this.lettuce = builder.lettuce || false;
        this.tomato = builder.tomato || false;
    }
}

class BurgerBuilder{
    constructor(size){
        this.size = size
    }

    addPepporoni(){
        this.pepporoni = true;
        return this;
    }

    addLettuce(){
        this.lettuce = true;
        return this;
    }

    addCheeze(){
        this.cheeze = true;
        return this;
    }

    addTomato(){
        this.tomato = true;
        return this;
    }

    build(){
        return new Burger(this);
    }
}

const burger =  new BurgerBuilder()
                .addPepporoni()
                .addLettuce()
                .addTomato()
                .build();

                
/**
 * When you find that the number of arguments to a function or method are too many(more than 2)
 * use a single object argument instead of multiple arguments. this serves two purposes
 * 
 * 1. makes your code less cluttered, since there is only one argument
 * 2. you dont have to worry about the order of arguments since argyments are now passed as named props
 * 
 * example
 * const burger = new Burger({
    size : 14,
    pepperoni : true,
    cheeze : false,
    lettuce : true,
    tomato : true
})

when to use  ??

When there could be several flavors of an object and to avoid constructor telescoping.
The key difference from the factory pattern is to be used when creation is a one step process while builder
pattern is to be used when creation is multi step process.

 */