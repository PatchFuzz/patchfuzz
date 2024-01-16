













(function tc_06__004() {
  var arg = 3;
  function a() {
    return 5 + arg;
  }

  arg = 4;
  var b = function () {
    return 6 + arg;
  };

  arg = 5;
  c = function e() {
    return 7 + arg;
  };

  assert(a() + b() + c() === 33);
})();

(function tc_06__005() {
  var a = "\u0410\u0411";
  var b = "\u0509\u0413";

  assert(a < b);
})();

(function tc_06__003() {
  var obj = new Object();

  function c(arg)
  {
    var obj = new Object();
    obj.par = arg;
    obj.print = function () {
      return arg;
    };
    return obj;
  }

  var a = c(5);
  var b = c(6);
  assert(a.print() + b.par === 11);
})();

(function tc_06__001() {
  var str = "a\u000Ab";
  assert(str[1] === '\n');
})();

(function tc_06__002() {
  function c(arg)
  {
    var obj = new Object();
    obj.print = function () {
      f = arg;
    };
    return obj;
  }

  a = c(5);
  b = c(6);

  a.print.toString = 7;

  assert(typeof a.print.toString !== typeof b.print.toString);
})();
