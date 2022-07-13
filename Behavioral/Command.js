/**
 * Real World example
 * 
 * A generic example would be you ordering a food at restaurant. you ask the waiter
 * to bring some food/ waiter simply forwards the request to Chef who has the knowledge
 * of what and how to cook.
 * 
 * Allows you to encapsulate actions in objects. The key idea behind this pattern is to provide the means
 * to decouple client from reciever
 */

//Reciever
class Bulb{
    turnOn(){
        console.log('Bulb has been lit')
    }

    turnOff(){
        console.log('Darkness')
    }
}

/*
Command Interface:
execute();
undo();
redo();
*/

class TurnOnCommand{
    constructor(bulb){
        this.bulb = bulb;
    }

    execute(){
        this.bulb.turnOn();
    }

    undo(){
        this.bulb.turnOff();
    }

    redo(){
        this.bulb.execute();
    }
}

class TurnOffCommand{
    constructor(bulb){
        this.bulb = bulb;
    }

    execute(){
        this.bulb.turnOff();
    }

    undo(){
        this.bulb.turnOn();
    }

    redo(){
        this.execute();
    }
}


class RemoteControl{
    submit(command){
        command.execute()
    }
}

const bulb = new Bulb();

const turnOn = new TurnOnCommand(bulb);
const turnOff = new TurnOffCommand(bulb);

const remote = new RemoteControl();
remote.submit(turnOn);
remote.submit(turnOff);