

var func = function () {
  foo.prototype = new Array(1, 2, 3);
  function foo() {}
  var f = new foo();
  f.length = f;
  try {
    var a = "Using f will give an error: " + f;
    print(false);
  } catch (e) {
    print(e instanceof RangeError);
  }
};

func();
