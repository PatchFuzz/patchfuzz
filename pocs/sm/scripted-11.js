what = 0;

function f(x) {
  g(x);
}

function g(x) {
  eval("what = true");
}

f(10);
print(what, true);
