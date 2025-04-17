
const arrayFreq = (arr)=>{
    let result = {}
    for(let val of arr){
        result[val] = (result[val] || 0) + 1
    }
    return result;
}

console.log(arrayFreq([1,3,2,6,3,4,2,3,5]))