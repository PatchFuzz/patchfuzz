


function mk() {
  return (function () {});
}

function f() {
  var j = 55;

  var f = function () {
    return j;
  }

  var g = function() {
  }

  var a = [ mk(), f, g, mk(), mk() ];

  for (var i = 0; i < 5; ++i) {
    a[i].p = 99;
  }
}

f();
