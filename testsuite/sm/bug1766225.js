

gczeal(4)
function a() {}
function b() {
  a(Array.prototype.slice.call(arguments, 1, 3));
}
function c() {
  b(1, 2);
}
for (i=0 ; i<200; ++i)
  c()
