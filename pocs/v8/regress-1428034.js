eval(`
var f = (
  a = function in_arrowhead_args() {
    return function inner() {
      b = 42;
    };
  },
  b = 1,
) => {
  print(1, b);
  a()();
  print(42, b);
};
f();
`);
