const Animals = require("../Animals.js")

class Fish extends Animals {
    constructor(name, color, sound, canSwim) {
        super(name, color, sound);
        this.color = color || 'gražios';
        this.canSwim = true;
    }

    swimAway() {

    }
}

module.exports = Fish;