













var arr = [1];

var ta = new Int8Array(arr);
Object.setPrototypeOf(arr, ta);
arr[1] = 2;

try {
  ta = new Int8Array(arr);
  assert(false);
} catch (e) {
  assert(e instanceof TypeError);
}
