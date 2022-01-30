const Pets = require("./Pets.js")

class Cat extends Pets {
    constructor(name, color, breed, sound) {
        super(name, color, breed, sound);
        this.breed = "naminis katinas";
        this.sound = "'miau miau!'"
    }
}
module.exports = Cat;