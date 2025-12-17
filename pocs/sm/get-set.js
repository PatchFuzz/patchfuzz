function print(stack, expectedLength) {
  let actual = 0;
  while (stack) {
    actual++;
    stack = stack.parent;
  }
  print(actual, expectedLength);
}

const get = { get s() { return saveStack(); } }.s;
print(get, 2);

let set;
try {
  ({
    set s(v) {
      throw saveStack();
    }
  }).s = 1;
} catch (s) {
  set = s;
}
print(set, 2);
