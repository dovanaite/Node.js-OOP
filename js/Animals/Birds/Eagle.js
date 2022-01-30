const Birds = require("./Bird.js")

class Eagle extends Birds {
    constructor(name, color, breed, sound, wingsCount, canFly) {
        super(name, color, breed, sound, wingsCount, canFly);
        this.color = "juodos";
        this.breed = 'erelis';
        this.sound = "'tuoj suvalgysiu tave!'"
    }

}

module.exports = Eagle;