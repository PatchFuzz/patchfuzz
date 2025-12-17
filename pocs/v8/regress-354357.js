var v = {};
function inlined() {
  return !(v.bar++);
}
function outer() {
  inlined();
};

outer();
outer();
