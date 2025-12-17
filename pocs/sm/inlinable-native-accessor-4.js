function testObject() {
  var obj = Object.defineProperty({}, "object", {
    get: Object,
  });

  for (var i = 0; i < 100; i++) {
    var o = obj.object;
    print(typeof o, "object");
    print(o !== null, true);
  }
}
testObject();

function testArray() {
  var obj = Object.defineProperty({}, "array", {
    get: Array,
  });

  for (var i = 0; i < 100; i++) {
    var a = obj.array;
    print(a.length, 0);
    print(Array.isArray(a), true);
  }
}
testArray();
