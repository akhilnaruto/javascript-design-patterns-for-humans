class WoodenDoor{
    getDescription(){
        console.log('I am a wooden door');
    }
}

class IronDoor{
    getDescription(){
        console.log('I am iron door');
    }
}

class Welder{
    getDescription(){
        console.log('i can only fit iron doors');
    }
}

class Carpenter{
   getDescription(){
     console.log('i can only fit wooden doors');
   }
}

class WoodenDoorFactory{
    makeDoor(){
        return new WoodenDoor();
    }

    makeFittingExpert(){
        return new Carpenter();
    }
}

class IronDoorFactory{
    makeDoor(){
        return new IronDoor();
    }

    makeFittingExpert(){
        return new Welder();
    }
}

var woodenDoorFactory = new WoodenDoorFactory();

var door = woodenDoorFactory.makeDoor();
var  expert = woodenDoorFactory.makeFittingExpert();

door.getDescription();
expert.getDescription();

var ironDoorFactory = new IronDoorFactory();
door = ironDoorFactory.makeDoor();
expert = ironDoorFactory.makeFittingExpert();

door.getDescription();
expert.getDescription();

/*
  wooden door factory encapsulated the carpenter and the wooden door 
  also iron door factory has encapsulated the irodn door and welder.
  and thus it had helped us make sure that for each of the created door, we do not get
  wrnong fitting expert

  when to use?
  when there are interrelated dependencies with not that simple creation logic involved.

*/