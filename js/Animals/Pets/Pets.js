const Animals = require("../Animals.js")

class Pets extends Animals {
    constructor(name, color, breed, sound) {
        super(name, color, breed, sound);
        this.color = color || 'gražios';
    }
}

module.exports = Pets;