const Fish = require("./Fish.js")

class Nemo extends Fish {
    constructor(name) {
        super(name);
        this.breed = "žuviukas";
        this.color = "oranžinės";
        this.sound = "'būtinai pažiūrėkit mano filmuką!'"
    }
}
module.exports = Nemo;