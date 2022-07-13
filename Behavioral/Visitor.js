/**
 * Consider someone visiting dubai. They just need a way to enter Dubai. After arrival, they can come and
 * visit any place in Dubai on their own without having to ask for permission 
 * 
 * 
 * Visitor pattern lets you to add further operations to objects without having to modify them
 * 
 */

class Monkey{
    shout(){
        console.log('Ooh oo aaa');
    }

    accept(operation){
        operation.visitMonkey(this);
    }
}

class Lion{
    roar(){
        console.log('Roaaar');
    }

    accept(operation){
        operation.visitLion(this);
    }
}

class Dolphin{
    speak(){
        console.log('Tuut tuttu tutt!!');
    }

    accept(operation){
        operation.visitDolphin(this);
    }
}

const speak = {
    visitMonkey(monkey){
      monkey.shout();
    },
    
    visitLion(lion){
        lion.roar();
    },

    visitDolphin(dolphin){
        dolphin.speak();
    }
}



const jump = {
    visitMonkey(monkey){
        console.log('Jumped 20 feet high! on to the tree');
    },
    visitLion(lion){
        console.log('Jumped 7 feet! back on the ground');
    },
    visitDolphin(dolphin){
        console.log('Walked on water a little and disseappeared');
    }

}

const monkey = new Monkey();
const lion = new Lion();
const dolphin = new Dolphin();

monkey.accept(speak);
monkey.accept(jump);

lion.accept(speak);
lion.accept(jump);

dolphin.accept(speak);
dolphin.accept(jump);

