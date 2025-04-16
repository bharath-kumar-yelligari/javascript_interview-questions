
const mergeObjects = (obj1, obj2) => {

    let temp = {};

    for(let val in obj1){
        console.log("val",val)
    }

    Object.keys(obj1).forEach((key) => {
        if (obj2.hasOwnProperty(key)) {
            temp[key] = [obj1[key], obj2[key]];
        } else {
            temp[key] = obj1[key];
        }
    })

    Object.keys(obj2).forEach((key) => {
        if (!obj1.hasOwnProperty(key)) {
            temp[key] = obj2[key];
        }
    })
    return temp;
}


console.log(mergeObjects({ a: 1, b: 2, d: 6 }, { a: 3, b: 4, c: 5, e: 4 }));
// Output: { a: [1, 3], b: [2, 4] }