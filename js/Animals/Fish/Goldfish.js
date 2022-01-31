const Fish = require("./Fish.js")

class Goldfish extends Fish {
    constructor(name) {
        super(name);
        this.breed = "auksinė žuvelė";
        this.color = "auksinės";
        this.sound = "'aš tikrai neketinu pildyti tavo norų!'";
        this.grantsWishes = false;
    }
    makeWish() {

    }
}
module.exports = Goldfish;