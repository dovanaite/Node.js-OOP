const Pets = require("./Pets.js")

class Cat extends Pets {
    constructor(name, color) {
        super(name, color);
        this.breed = "naminis katinas";
        this.sound = "'miau miau!'"
    }
}
module.exports = Cat;