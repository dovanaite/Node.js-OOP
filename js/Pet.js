class Pet {
    constructor(name, color) {
        this.type = 'pet';
        this.name = name;
        this.legs = 4;
        this.color = color || 'pilkas';
    }

    voice() {
        console.log(`Hi, I'm ${this.type} ${this.name} and my color is ${this.color} and I have ${this.legs} legs`);
    }
}

module.exports = Pet;