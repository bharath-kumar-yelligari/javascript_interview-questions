const factorial = (val) => {
    let result = 1;
    if (val == 0 || val == 1) return val
    for (let i = 2; i <= val; i++) {
        result *= i
    }
    return result
}

console.log(factorial(5))