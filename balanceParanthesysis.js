const balanceParanthesysis = (str) => {

    let stackParam = [];
    let strArr = str.split("")
    for (let val of strArr) {
        if (val == "(") {
            stackParam.push(val)
        } else {
            if (!stackParam.includes("(")) return false
            stackParam.pop()
        }
    }
    return stackParam.length == 0;
}

console.log(balanceParanthesysis("((()))()"));


