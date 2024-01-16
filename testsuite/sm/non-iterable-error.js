

try {
  new Set(...[1]);
} catch (e) {
  assertEq(e.message, "1 is not iterable");
}
