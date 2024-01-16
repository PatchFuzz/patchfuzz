



function f() {
  throw "boom";
  try {} catch (e) {}
}
assertThrows(f);
