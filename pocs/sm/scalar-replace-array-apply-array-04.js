var result;

function g(a, b) {
  with ({}) {}
  result = a + b;
}

function escape() { with({}) {} }

function f(...args) {
  escape(args);
  for (var i = 0; i < 50; ++i) {
    g.apply(this, args);
  }
}


print(isSmallFunction(f), true);

f(1, 2);
print(result, 3);

f("");
print(result, "undefined");
