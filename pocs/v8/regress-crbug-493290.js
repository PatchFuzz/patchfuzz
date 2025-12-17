function f() {
  throw "boom";
  try {} catch (e) {}
}
print(f);
