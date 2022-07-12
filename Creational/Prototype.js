/**
 * create object based on an existing object through cloning
 */

class Sheep{
    constructor(name, category = "Mountain Sheep"){
        this.name = name;
        this.category = category;
    }

    setName(name){
        this.name = name;
    }

    getName(){
        console.log(this.name);
    }

    setCategory(category){
      this.category = category;
    }

    getCategory(){
        console.log(this.category);
    }
}

class SheepPrototype{
    constructor(proto){
        this.proto = proto;
    }

    clone(){
        return new Sheep(this.proto.name, this.proto.category);
    }
}

const originalSheep = new Sheep("Jolly");
originalSheep.getName();
originalSheep.getCategory();

const prototype = new SheepPrototype(originalSheep);
const clonedSheep = prototype.clone();
clonedSheep.setName("Dolly");
clonedSheep.getName();
clonedSheep.getCategory();


originalSheep.getName();
originalSheep.getCategory();

/**
 * when to use??
 * 
 * When an object is required that is similar to existing object or when the creation would be expensive
 * as compared to cloning
 */