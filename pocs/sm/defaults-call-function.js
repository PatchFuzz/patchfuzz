;

function f1(a=g()) {
  function g() {
  }
}
print(f1, ReferenceError);

function f2(a=g()) {
  function g() {
    return 43;
  }
  print(a, 42);
}
f2(42);
