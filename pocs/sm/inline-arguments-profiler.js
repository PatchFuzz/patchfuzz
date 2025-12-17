function foo() { return arguments; }
function bar(x) { return foo(x); }


enableGeckoProfiling();
with ({}) {}
for (var i = 0; i < 100; i++) {
  var result = bar(3);
  print(result.length, 1);
  print(result[0], 3);
}
