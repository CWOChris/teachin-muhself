class Animal {
    constructor(sound) {
        this.name = 'No Name';
        this.legs = 4;
        this.tail = true;
        this.noise = sound;
        this.tailstring = this.tail ? 'has' : 'has no';
}
displayAnimalInfo() {
    console.log(`${this.name} has ${this.legs} legs and ${this.tailstring} tail.`);
}
}

class Cat extends Animal {
    constructor(name, sound) {
        super();
        this.noise = sound;
        this.name = "Cat Named " + name;
}
purr() {
    console.log("Purr!");
}
}

class Fish extends Animal {
    constructor(name) {
        super("Blub!");
        this.name = "Fish Named " + name;
        this.legs = 0;
        this.tail = true;
}
}

const mrPants = new Cat('Mr. Pants', 'Meow!');
const mrFish = new Fish('Mr. Fish');

mrPants.purr();
mrPants.displayAnimalInfo();

const someAnimal = new Animal('Woof!');
someAnimal.displayAnimalInfo();
