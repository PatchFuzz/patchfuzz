var s = "";
var input = "";
for (var i = 0; i < 500; ++i) {
    s += "((?<a" + i + ">a)?|(?<a" + i + ">A)?)?";
    s += "(?<b" + i + ">b)?";
    if (i % 2) {
      input += "a";
    } else {
      input += "A";
    }
}

try {
  var r = RegExp(s, "d");
  var e = r.exec(input);

  for (var i = 0; i < 500; i++) {
    if (i % 2) {
      print(e.groups["a" + i], "a");
    } else {
      print(e.groups["a" + i], "A");
    }
    print(e.groups["b" + i], undefined);

    print(e.indices.groups["a" + i][0], i)
    print(e.indices.groups["a" + i][1], i + 1)
    print(e.indices.groups["b" + i], undefined)
  }
} catch (err) {
  print(err.message, "too much recursion");
}
