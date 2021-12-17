const squareList = arr => {
    // Only change code below this line
    return arr.filter(i => i > 0 && Number.isInteger(i)).map(i => i*i)

    // Only change code above this line
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);