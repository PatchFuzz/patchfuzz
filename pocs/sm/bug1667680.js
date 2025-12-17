function f() {
  var s = "for (var i = 0; i < 100; i++) {}; return 2;";
  s += "var x = [" + "9,".repeat(100_000) + "];";
  var g = Function(s);
  print(g(), 2);
}
f();
