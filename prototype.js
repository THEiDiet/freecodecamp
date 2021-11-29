// learn prototype---------------------------------
function Bird() {}

Bird.prototype.fly = function () {
    return "I am flying!";
};

function Penguin() {}
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;

Penguin.prototype.fly = () => {
    return 'Alas, this is a flightless bird.'
}

let penguin = new Penguin();
console.log(penguin.fly());

//mixins-------------------------------------------

let bird = {
    name: "Donald",
    numLegs: 2
};

let boat = {
    name: "Warrior",
    type: "race-boat"
};

let glideMixin = (obj) => {
    obj.glide = () => {}
}
glideMixin(bird)
glideMixin(boat)

// создание privat переменной

function Bird() {
    let weight = 15;
    this.getWeight = () => {
        return weight
    }
}
//IIFE immedietly invoked function expression
let funModule = (function () {
    return {
        isCuteMixin: function (obj) {
            obj.isCute = function () {
                return true;
            };
        },
        singMixin: function (obj) {
            obj.sing = function () {
                console.log("Singing to an awesome tune");
            };
        }
    }
})()