class MySet extends Set {
  get size() {
    return super.size;
  }
}

function testWithClass() {
  var sets = [
    new MySet(),
    new MySet([1, 2, 3, 4]),
  ];
  for (var i = 0; i < 100; ++i) {
    var set = sets[i & 1];
    print(set.size, (i & 1) * 4);
  }
}
testWithClass();

function testWithReflect() {
  var sets = [
    new Set(),
    new Set([1, 2, 3, 4]),
  ];
  for (var i = 0; i < 100; ++i) {
    var set = sets[i & 1];
    print(Reflect.get(Set.prototype, "size", set), (i & 1) * 4);
  }
}
testWithReflect();
