const arr = [1,2,3,3,2,2,3];

const result = arr.filter((item, index) => {
    return arr.indexOf(item) === index
})

console.log(result)