console.log(x);  // ?
var x = 5;

console.log(hoist) // hoiste function
function hoist() {
    console.log(y);  // ?
    var y = 10;
    console.log(y);  // ?
}
hoist();

//console.log(z()); //TypeError: z is not a function
console.log(z); // undefined, var function cannot be hoisted
var z = function () {
    console.log("This is a function expression");
};
console.log(z());
