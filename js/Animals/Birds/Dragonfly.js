const Birds = require("./Bird.js")

class Dragonfly extends Birds {
    constructor(name, color, breed, sound, wingsCount, canFly, imposter) {
        super(name, color, breed, sound, wingsCount, canFly);
        this.color = "mėlynos";
        this.breed = 'laumžirgis';
        this.sound = "'traukis iš kelio, aš parskrendu!'"
        this.imposter = true;
    }

}

module.exports = Dragonfly;