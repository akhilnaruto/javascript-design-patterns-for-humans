/**
 * Suppose you have three payment methods A B and C setup in your account each having
 * a different amount in t
 * A has 100 USD
 * B has 300 USD
 * C having 1000 USD
 * 
 * and preference is choosen as A then B and then C.
 * you try to purchace simething that is worth 210, using chain of responsibility,
 * firt of all acount A will be checked, if it can make the purchase, if yes purchase will be made
 * and chain will be broken. if not, request will move forward to account B checking for amount
 * and so on
 * 
 * It helps building chain of objects. Request enters from one end and keeps going from object to object
 * till it finds the suitable handler
 */

class Account{
    setNext(account){
        this.successor = account;
    }

    pay(amountToPay){
        if(this.canPay(amountToPay)){
            console.log(`Paid ${amountToPay} using ${this.name}`);
        }else if(this.successor){
            console.log(`cannot pay using ${this.name}. proceeding`);
            this.successor.pay(amountToPay);
        }else{
            console.log('None of the accounts have enough balance')
        }
    }

    canPay(amount){
        return this.balance >= amount;
    }
}

class Bank extends Account{
    constructor(balance){
        super();
        this.name = 'bank';
        this.balance = balance;
    }
}

class Paypal extends Account{
    constructor(balance){
        super();
        this.name = 'Paypal';
        this.balance = balance;
    }
}

class Bitcoin extends Account{
    constructor(balance){
        super();
        this.name = 'bitcoin';
        this.balance= balance;
    }
}

//bank -> paypal -> bitcoin

const bank = new Bank(100);
const payPal = new Paypal(200);
const bitcoin = new Bitcoin(300);

bank.setNext(payPal);
payPal.setNext(bitcoin);

bank.pay(250);