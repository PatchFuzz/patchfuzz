

var func = function () {
  foo.prototype = new Array(1, 2, 3);
  function foo() {}
  var f = new foo();
  f.length = f;
  try {
    var a = "Using f will give an error: " + f;
    assert(false);
  } catch (e) {
    assert(e instanceof RangeError);
  }
};

func();
