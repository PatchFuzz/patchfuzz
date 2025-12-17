var c = 4;
var z = 5;

function addX(x) {
  return function(n) {
    var b = 2;
    return n + x;
  }
}

addThree = addX(3);
d = addThree(c+z);

function f() {
  try {
    throw "error";
  }
  catch (err) {
    var c = 10;
  }

  var m = null;

  var user = {
    name: "John",
    age: 30
  };

  var x = true;
  var b = 10;

  (function() {
    var a = [1,2,3]
    a.y = "abc";
    with (a) {
      var h = [4,5,6]
      with (h) {
        h.d = "dfg"
      }
      a.d = x;
    }
  })();
}

f();

