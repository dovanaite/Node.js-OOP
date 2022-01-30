const Pets = require("./Pets.js")

class Dog extends Pets {
    constructor(name, color, breed, sound) {
        super(name, color, breed, sound);
        this.breed = "naminis šuo";
        this.sound = "'au au au!'"
    }
}
module.exports = Dog;