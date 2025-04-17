const isPalindrome = (word) => {
    return word === word.split('').reverse().join('')
}

console.log(isPalindrome("racecar")); 