const globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
    return arr.slice().sort((a, b)=> a>b ? 1 :-1)
}

nonMutatingSort(globalArray);