const Birds = require("./Bird.js")

class Chicken extends Birds {
    constructor(name, color, breed, sound, wingsCount, canFly) {
        super(name, color, breed, sound, wingsCount, canFly);
        this.breed = 'višta';
        this.sound = "'put pudakšt!'"
    }

}

module.exports = Chicken;