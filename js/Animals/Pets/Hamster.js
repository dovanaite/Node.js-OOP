const Pets = require("./Pets.js")

class Hamster extends Pets {
    constructor(name, color, breed, sound, canEatTillDeath) {
        super(name, color, breed, sound);
        this.breed = "naminis žiurkėnas";
        this.sound = "'krimst krimst!'"
        this.canEatTillDeath = true;
    }
}
module.exports = Hamster;