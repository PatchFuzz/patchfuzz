var arr = [];
for (var i = 1; i != 390000; ++i) {
  arr.push("f()");
}
new Function(arr.join());
