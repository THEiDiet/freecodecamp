// The global variable
const s = [23, 65, 98, 5];

Array.prototype.myMap = function (callback) {

    // Only change code below this line
    const newArray = [];
    this.forEach(a => newArray.push(callback(a)))
    // Only change code above this line
    return newArray;
};

const new_s = s.myMap(function (item) {
    return item * 2;
});