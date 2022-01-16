function alphabeticalOrder(arr) {
    return arr.sort((a,b)=> a > b ? 1 :-1)
}

alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);