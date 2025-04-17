const duplicateString = (str) => {
    let result = [];
    let arr = str.split(" ")
    arr.forEach((value, index) => {
        if (arr.indexOf(value) != index) {
            result.push(value)
        }
    })
    return result
}

console.log(duplicateString("this is a string and it is a duplicate string"))