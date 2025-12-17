var s = "";
var input = "";
for (var i = 0; i < 500; ++i) {
    s += "(?<a" + i + ">a)";
    s += "(?<b" + i + ">b)?";
    input += "a";
}

try {
  var r = RegExp(s);
  var e = r.exec(input);

  for (var i = 0; i < 500; i++) {
    print(e.groups["a" + i], "a");
    print(e.groups["b" + i], undefined);
  }
} catch (err) {
  print(err.message, "too much recursion");
}
