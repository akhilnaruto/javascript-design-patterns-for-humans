/**
 * Read world example
 *   
 *    Did you ever have fresh tea from some stall? They often make more than one cup that
 *    you demanded and save the rest for any other customer so to save the resources(gas etc)
 *    Flyweight pattern is all about that i.e sharing
 *  
 *    it is used to minimize memory usage or computational expenses by sharing as much as possible with
 *    similar object
 */


//Anything that will be cached is flyweight
// Types of tea here will be flyweight
class KarakTea{

}

class TeaMaker{
    constructor(){
        this.availableTea = {};
    }

    make(preference){
        this.availableTea[preference] = this.availableTea[preference] || new KarakTea();
        return this.availableTea[preference];
    }
}

class TeaShop{
    constructor(teaMaker){
        this.teaMaker = teaMaker;
        this.orders = [];
    }

    takeOrder(teaType, table){
        this.orders[table] = this.teaMaker.make(teaType);
    }

    serve(){
        this.orders.forEach((order, index) =>{
            console.log(`Serving tea to table# ${index}`);
        })
    }

}

const teaMaker = new TeaMaker();
const shop = new TeaShop(teaMaker);

shop.takeOrder('less')