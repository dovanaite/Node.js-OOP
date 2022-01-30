const Fish = require("./Fish.js")

class Nemo extends Fish {
    constructor(name, color, breed, sound) {
        super(name, color, breed, sound);
        this.breed = "žuviukas";
        this.color = "oranžinės";
        this.sound = "'būtinai pažiūrėkit mano filmuką!'"
    }
}
module.exports = Nemo;