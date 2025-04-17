const flattenArray = (arr) => {
    let temp = []
    for (let val of arr) {
        (Array.isArray(val)) ? temp = temp.concat(flattenArray(val)) : temp.push(val)
    }
    return temp;
}
console.log(flattenArray([1, 2, [3, 4, [5, 6, 10, [1, 4]], 7], 8]))