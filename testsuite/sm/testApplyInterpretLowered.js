


function recompile() {}

function foo() {
  if (arguments[0] == 9)
    recompile();
  return arguments[0];
}
function bar() {
  for (var i = 0; i < 10; i++)
    assertEq(foo.apply(null, [i]), i);
}
bar();
