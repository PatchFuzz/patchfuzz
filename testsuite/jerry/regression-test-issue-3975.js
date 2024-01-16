













a = 10
b = new Uint8Array(a)
function c() { d }

try {
  b.sort(c);
  assert(false);
} catch (e) {
  assert(e instanceof ReferenceError);
}
