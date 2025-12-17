function testNullUndefined() {
  for (var i = 0; i < 100; i++) {
    var v = (i & 1) ? null : undefined;

    var map = new Map(v);
    print(map.size, 0);

    var set = new Set(v);
    print(set.size, 0);
  }
}
testNullUndefined();

function testProtoGetter() {
  var count = 0;
  Object.defineProperty(Array.prototype, 1, { get: () => count++ });
  for (var i = 0; i < 100; i++) {
    var map = new Map([
      [1, 1],
      [2, 2],
      [3, , 3],
    ]);
    print(map.size, 3);
    print(map.get(3), i * 3);

    var set = new Set(["a", , "c"]);
    print(set.size, 3);
    print(set.has(i * 3 + 1), true);

    new Set([1, ,]); 
  }
  print(count, 300);
}
testProtoGetter();


function testPrimitiveIterable() {
  Number.prototype[Symbol.iterator] = Array.prototype[Symbol.iterator];
  Number.prototype.length = 2;
  Number.prototype[0] = ["a", "b"];
  Number.prototype[1] = ["c", "d"];

  for (var i = 0; i < 100; i++) {
    var map = new Map(i);
    print(map.size, 2);
    print(map.get("c"), "d");

    var set = new Set(i);
    print(set.size, 2);
    print(set.has(Number.prototype[1]), true);

    var set2 = new Set("abc123abc");
    print(set2.size, 6);
  }
}
testPrimitiveIterable();
