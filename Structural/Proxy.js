/**
 * Using the proxy pattern, a class represents the functionality if another class
 */

class LabDoor{
    open(){
        console.log('opening lab door');
    }

    close(){
        console.log('closing the lab door');
    }
}

class Security{
    constructor(door){
        this.door = door;
    }

    open(password){
        if(this.authenticate(password)){
            this.door.open();
        }else{
            console.log('it aint possible');
        }
    }

    authenticate(password){
        return password === 'hello';
    }

    close(){
        this.door.close();
    }
}

const door = new Security(new LabDoor());
door.open('invalid');

door.open('hello');
door.close();