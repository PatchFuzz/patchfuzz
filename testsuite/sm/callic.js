


var g;
function foo() {
  for (g = 0; g < 5; g++) {
    bar();
  }
  function bar() {
    with ({}) {
      eval("g = undefined;");
    }
  }
}
foo();

assertEq(g, NaN);



function native() {
  var x;
  x = x;
  x = Math.ceil(NaN);
  assertEq(x, NaN);
}
native();
