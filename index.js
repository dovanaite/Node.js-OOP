const Cat = require("./js/Animals/Pets/Cat.js");
const Dog = require("./js/Animals/Pets/Dog.js");
const Hamster = require("./js/Animals/Pets/Hamster.js");
const Chicken = require("./js/Animals/Birds/Chicken.js");
const Parrot = require("./js/Animals/Birds/Parrot.js");
const Eagle = require("./js/Animals/Birds/Eagle.js");
const Dragonfly = require("./js/Animals/Birds/Dragonfly.js");

const rainis = new Cat('Rainis', 'rainos');
const rexas = new Dog('Rexas');
const krimsnius = new Hamster('Krimsnius', 'rudos');
const kudle = new Chicken('Kudlė', 'baltos');
const braske = new Parrot('Braškė');
const skraidunas = new Eagle('Skraidūnas');
const greituolis = new Dragonfly('Greituolis');


console.log(rainis);
console.log(rexas);
console.log(krimsnius);
console.log(braske);
console.log(greituolis);

rainis.voice();
rexas.voice();
krimsnius.voice();
kudle.voice();
braske.voice();
skraidunas.voice();
greituolis.voice();


console.log('PRISISTATYMAI:');
rainis.introduce();
rexas.introduce();
krimsnius.introduce();
kudle.introduce();
braske.introduce();
skraidunas.introduce();