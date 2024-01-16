

































function kaboom() {
  var a = function () {},
      b = function () {},
      c, d = function () { var d = []; },
      e = function () { var e = {}; };
    c = function () { d(); b(); };
    return function (x, y) {
      c();
      a();
      return function f() { }({});
    };
}

kaboom();

%DeoptimizeFunction(kaboom);

gc();
