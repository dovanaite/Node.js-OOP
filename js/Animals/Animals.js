class Animals {
    constructor(name, color, sound) {
        this.name = name;
        this.color = color;
        this.sound = sound;
    }
    voice() {
        console.log(`${this.name} ${this.breed} pasakė: ${this.sound}`);
    }
    introduce() {
        console.log(`Aš esu ${this.name}, ${this.color} spalvos ${this.breed}.`)
    }
}

module.exports = Animals;