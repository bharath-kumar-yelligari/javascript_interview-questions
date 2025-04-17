const evenOddArray = (arr) => {

    let even = [], odd = [];
    for (let val of arr) {
        (val % 2 == 0) ? even.push(val) : odd.push(val);
    }

    return [even, odd]
}

console.log(evenOddArray([1, 3, 5, 7, 4, 6, 9, 16, 17]))