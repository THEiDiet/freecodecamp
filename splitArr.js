function chunkArrayInGroups(arr, size) {
    const sliced_array = []
    for (let i = 0; i <arr.length; i += size) {
        sliced_array.push(arr.slice(i, i + size));
    }
    return sliced_array
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2))






