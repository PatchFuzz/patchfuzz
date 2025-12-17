function h(i) {
  if (i === 150) {
      with(this) {} 
      
      
      
      gc(this, "shrinking");
      g = (i, x) => x + 20;
      f();
  }
}
function g(i, x) {
  h(i);
  return x + 1;
}
function f() {
  for (var i = 0; i < 300; i++) {
      g(i, "foo");
      g(i, 1);
  }
}
f();
