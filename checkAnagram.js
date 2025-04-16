const checkAnagram = (input1, input2) => {
    
    return input1.split('').sort().join('') === input2.split('').sort().join('');
}

console.log(checkAnagram('silent', 'listen'))