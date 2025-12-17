(function f() {
  try {
    throw 1;
  } catch (e) {
    var a = 0;
    var b = 0;
    var c = 0;
    var x = 1;
    var result = eval('eval("x")').toString();
    print("1", result);
  }
  var x = 2;
  var result = eval('eval("x")').toString();
  print("2", result);
})();
