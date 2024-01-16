













f();
let g;
function f() {
  assert(eval('function g() { return 5}; g')() === 5);
}
