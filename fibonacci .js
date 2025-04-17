const fibannoci = (length) => {
    console.log(length)
    let fibArray = [0, 1]
    for (let i = 2; i < length; i++) {
        fibArray.push(fibArray[fibArray.length - 1] + fibArray[fibArray.length - 2])
    }
    return fibArray;
}

console.log(fibannoci(8))// 0,1,1,2,3,5,8,13