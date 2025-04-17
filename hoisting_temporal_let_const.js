console.log(a);  //  throws error cannot access 'a' before initialization
var a = 1; 

function checkTDZ() {
  console.log(b);  // ?
  var b = 2;
  console.log(b);  // ?
}
checkTDZ();

if (true) {
  console.log(c);  // ?
  var c = 3;
}