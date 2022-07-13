/**
 * Real world example
 * 
 * A general example would be when you talk to someone on your mobile phone, there is network 
 * provider sitting between you and them and your conversation goes through it instead of being
 * directly sent. 
 * 
 * Mediator pattern adds a third party object(Called Mediator) to control the intersection between
 * two objects. It helps to reduce the coupling between the classes communicating with each other.
 * Because now they dont need to have the knowldge of each others implementation
 */


class ChatRoom{
    showMessage(user, message){
        const time = new Date();
        const sender = user.getName();

        console.log(`${time} [${sender}]:  ${message}`);
    }
}

class User{
    constructor(name, chatMediator){
        this.name = name;
        this.chatMediator = chatMediator;
    }

    getName(){
        return this.name;
    }

    send(message){
       this.chatMediator.showMessage(this, message);
    }
}


const mediator = new ChatRoom();

const john = new User('John Doe', mediator);
const jane = new User('Jane Doe', mediator);

john.send('Hi there');
jane.send('Hey!');
