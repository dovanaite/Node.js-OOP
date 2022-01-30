const Birds = require("./Bird.js")

class Parrot extends Birds {
    constructor(name, color, breed, sound, wingsCount, canFly) {
        super(name, color, breed, sound, wingsCount, canFly);
        this.breed = 'papūga';
        this.sound = "tai, ką tu pasakei!";
        this.color = "įvairios"
    }

}

module.exports = Parrot;