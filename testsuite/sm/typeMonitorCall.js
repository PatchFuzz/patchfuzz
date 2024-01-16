


function foo(x) {
  return x + 10;
}

var array = [1,2,3,4,5,6,7,"eight"];


var f = this[eval("'foo'")];

for (var i = 0; i < array.length; i++) {
  var res = f(array[i]);
  if (i != 7)
    assertEq(res, i + 11);
  else
    assertEq(res, "eight10");
}
