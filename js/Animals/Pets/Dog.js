const Pets = require("./Pets.js")

class Dog extends Pets {
    constructor(name, color) {
        super(name, color);
        this.breed = "naminis šuo";
        this.sound = "'au au au!'"
    }
}
module.exports = Dog;