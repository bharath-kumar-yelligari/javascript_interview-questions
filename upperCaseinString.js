const input = 'i am a developer';

const resultTemp = input.split(" ").map((val) => { 
    console.log(val)
    return val.replace(val[0], val[0].toUpperCase())
})

const result = resultTemp.join(" ")

console.log(result)