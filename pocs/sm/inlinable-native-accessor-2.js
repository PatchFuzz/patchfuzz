Object.defineProperty(Number.prototype, "tostr", {
  get: Number.prototype.toString,
});

function testWithPrimitive() {
  var key = "tostr";
  for (var i = 0; i < 100; ++i) {
    print(i.tostr, i.toString());
    print(i[key], i.toString());
  }
}
testWithPrimitive();


Object.defineProperty(Date.prototype, "time", {
  get: Date.prototype.getTime,
});

function testWithObject() {
  var key = "time";
  for (var i = 0; i < 100; ++i) {
    var d = new Date(i);
    print(d.time, d.getTime());
    print(d[key], d.getTime());
  }
}
testWithObject();
