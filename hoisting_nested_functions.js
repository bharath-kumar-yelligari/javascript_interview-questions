var a = 4;

function first() {
  console.log(a);  // ?
  var a = 2; // here local scope a shadows global a and redeclares it
  second();
}

function second() {
  console.log(a);  // ?
}

first();