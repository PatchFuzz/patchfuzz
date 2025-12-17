;

function f(a=42) {
    return a;
    function a() { return 19; }
}
print(f()(), 19);
function h(a=b, b=43) {
    return [a, b];
    function b() { return 42; }
}

print(h, ReferenceError);
function i(b=FAIL) {
    function b() {}
}
print(i, ReferenceError);
i(42);
function j(a=(b=42), b=8) {
    return b;
    function b() { return 43; }
}

print(j, ReferenceError);
function k(a=(b=42), b=8) {
    return b;
    function a() { return 43; }
}

print(k, ReferenceError);
function l(a=8, b=a) {
    return b;
    function a() { return 42; }
}
print(l(), 8);
function m([a, b]=[1, 2], c=a) {
  function a() { return 42; }
  print(typeof a, "function");
  print(a(), 42);
  print(b, 2);
  print(c, 1);
}
m();
