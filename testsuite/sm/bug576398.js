function K(x) {
  with ({});    
  this.x = x; 
}
function f() {
  var a = new K(1);
  var b = new K(2);
  return (a == b);
}
assertEq(f(), false);
