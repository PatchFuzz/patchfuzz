actual = '';
expected = '6,';



var g = 0;

function h(args) {
  g = args.length;
}

function f() {
  h(arguments);
}

for (var i = 0; i < 5; ++i) {
  f(10, 20, 30, 40, 50, 60);
}
print(g);


print(actual, expected)
