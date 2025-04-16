// let a = 10;
// let b = a; // Copy
// console.log(a); // 10 (unchanged)
// console.log(b); // 10 (unchanged)

// b = 20;
// console.log('after', b); // 10 (unchanged)

// console.log('after', a); // 10 (unchanged)

let obj1 = {
    name: "Alice",
    details: {
        age: 25,
        city: "New York",
        contact: {
            phone: "1111111111"
        }
    }
};
let obj2 = structuredClone(obj1);
//let obj2 = JSON.parse(JSON.stringify(obj1));

console.log('Before', obj2.details.age); // Bob (changed)

obj1.details.age = 55;
console.log('obj1', obj1.details.age); // Bob (changed)

console.log('obj2', obj2.details.age); // Bob (changed)