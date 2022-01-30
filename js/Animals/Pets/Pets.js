const Animals = require("../Animals.js")

class Pets extends Animals {
    constructor(name, color, breed, sound) {
        super(name, color, breed, sound);
        this.color = color || 'gražios';
        this.breed = "naminis gyvūnėlis";

    }
}

module.exports = Pets;