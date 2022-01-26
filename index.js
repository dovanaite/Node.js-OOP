const Cat = require("./js/Cat.js");
const Dog = require("./js/Dog.js");
const Hamster = require("./js/Hamster.js");

const rainis = new Cat('Rainis', 'rainis');
const garfildas = new Cat('Garfildas', 'oranzinis');
const freja = new Cat('Freja', 'ruda');
console.log(rainis);
console.log(garfildas);
console.log(freja);
rainis.voice();
const rex = new Dog('Rex');
const brisius = new Dog('Brisius', 'rudas');

rex.voice();
brisius.voice();
freja.voice();

const chamiakas = new Hamster('Chamiakas', 'raudonas');
chamiakas.voice();