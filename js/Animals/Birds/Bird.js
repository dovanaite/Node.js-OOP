const Animals = require("../Animals.js")

class Birds extends Animals {
    constructor(name, color, breed, sound, wingsCount, canFly) {
        super(name, color, breed, sound, wingsCount, canFly);
        this.color = color || 'gražios';
        this.breed = "naminis gyvūnėlis";
        this.wingsCount = 2;
        this.canFly = true;
    }
    flyAway() {

    }
}

module.exports = Birds;