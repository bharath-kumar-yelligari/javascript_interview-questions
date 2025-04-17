
const vowelCount = (str) => {
    let vowels = ["a", "e", "i", "o", "u"]
    let count = 0
    for (let val of str) {
        if (vowels.includes(val)) {
            count++
        }
    }
    return count
}
console.log(vowelCount("india is my country"))

const vowelFrequencyCount = (str) => {
    let vowels = ["a", "e", "i", "o", "u"]
    let result = {}
    for (let val of str) {
        if (vowels.includes(val)) {
            result[val] = (result[val] || 0) + 1;
        }
    }
    return result
}
console.log(vowelFrequencyCount("india is my country"))