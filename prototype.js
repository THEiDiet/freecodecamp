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