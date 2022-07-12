/**
 * Bridge pattern is about preferring composition over inheritance. implementation details are pushed from a hierarchy
 * to another object within a seperate hierarchy
 */


class About{
    constructor(theme){
        this.theme =  theme;
    }

    getContext(){
        return `About Page in ${this.theme.getColor()}`; 
    }
}

class Carrers{
    constructor(theme){
        this.theme = theme;
    }

    getContext(){
        return `Carrers page in ${this.theme.getColor()}`
    }
}

// theme hierarchy

class DarkTheme{
    getColor(){
        return 'Dark Black'
    }
}

class LightTheme{
    getColor(){
        return 'Off White'
    }
}

class AquaTheme{
    getColor(){
        return 'Light Blue'
    }
}

const darkTheme = new DarkTheme();

const about = new About(darkTheme);
const carrers = new Carrers(darkTheme);

console.log(about.getContext());
console.log(carrers.getContext());