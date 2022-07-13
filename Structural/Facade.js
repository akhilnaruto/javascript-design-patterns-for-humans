/**
 * Real world example:
 * 
 * How do you turn on computer ? "Hit the power button" and thats it.its a simple interface that is provided on outside
 * internally it has to do a lot of stuff to make it run. This simple interface to the complex subsystem is a facade
 * 
 * Facase pattern provided a simplified interface to a complex subsystem
 * 
 */


class Computer {
    getElectricShock() {
        console.log('Ouch!!');
    }

    makeSound() {
        console.log('Beep beep ');
    }

    showLoadingScreen(){
        console.log('Loading..');
    }

    bam(){
        console.log('Ready to be used!!');
    }

    closeEverything(){
        console.log('Bup bup bup byzzzz');
    }

    sooth(){
        console.log('Zzzzzz');
    }

    pullCurrent(){
        console.log('Haaah');
    }

}

class ComputerFacade{
    constructor(computer){
        this.computer = computer;
    }

    turnOn(){
        this.computer.getElectricShock();
        this.computer.makeSound();
        this.computer.showLoadingScreen();
        this.computer.bam();
    }

    turnOff(){
        this.computer.closeEverything();
        this.computer.pullCurrent();
        this.computer.sooth();
    }
}

const computer = new ComputerFacade(new Computer());
computer.turnOn();
computer.turnOff();