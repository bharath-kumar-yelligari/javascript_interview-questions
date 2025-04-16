const zeroSum = (arr) => {
    var temp = [];
    for (let val of arr) {
        if (arr.includes(-val)) {
            console.log(`Pair found: ${val}, ${-val}`);
            if (!temp.includes([val, -val])) {
                temp.push([val, -val]);
            }
            arr.splice(arr.indexOf(-val), 1);
        }
    }
    return temp;
}

console.log(zeroSum([1, 2, -2, 3, -3, -5, -4, 5])); 


function bubbleSort(str) {
    let chars = str.split('');
    let len = chars.length;

    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - i - 1; j++) {
            console.log("i",i)
            console.log("j",j)

            if (chars[j] > chars[j + 1]) {
                // Swap characters
                let temp = chars[j];
                chars[j] = chars[j + 1];
                chars[j + 1] = temp;
            }
        }
    }

    return chars.join('');
}

const unsortedString = "hello";
const sortedString = bubbleSort(unsortedString);
console.log("Sorted string:", sortedString);