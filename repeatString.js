const input = 'shailendra';

const result = input.repeat(2);
console.log(result);


const repeatString = (str, count = 3) => {
    console.log(str, count)
    let sum = "";
    do {
        sum += str;
        count--;
    } while (count > 0)

    return sum
}

console.log(repeatString('AB', 4));