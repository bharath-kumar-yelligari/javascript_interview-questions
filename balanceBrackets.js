function isBalanced(str) {
    const stack = [];
    const brackets = {
      '(': ')',
      '{': '}',
      '[': ']'
    };
  
    for (let char of str) {
      if (brackets[char]) {
        // Opening bracket
        stack.push(char);
      } else if (Object.values(brackets).includes(char)) {
        // Closing bracket
        const last = stack.pop();
        if (brackets[last] !== char) {
          return false;
        }
      }
    }
  
    return stack.length === 0;
  }

  console.log(isBalanced("[((()))(){{}}]")); 