const Pets = require("./Pets.js")

class Hamster extends Pets {
    constructor(name, color) {
        super(name, color);
        this.breed = "naminis žiurkėnas";
        this.sound = "'krimst krimst!'"
        this.canEatTillDeath = true;
    }
}
module.exports = Hamster;