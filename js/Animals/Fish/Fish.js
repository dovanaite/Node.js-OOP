const Animals = require("../Animals.js")

class Fish extends Animals {
    constructor(name, color, breed, sound, canSwim) {
        super(name, color, breed, sound);
        this.color = color || 'gražios';
        this.canSwim = true;
    }

    swimAway() {

    }
}

module.exports = Fish;