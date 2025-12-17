function testOwnProp() {
  var count = 0;
  var objects = [{get x() { count += 1; }, set x(v) { count += 2; }},
                 {get x() { count += 3; }, set x(v) { count += 4; }},
                 {get x() { count += 5; }, set x(v) { count += 6; }}];
  print(shapeOf(objects[0]), shapeOf(objects[1]));
  print(shapeOf(objects[0]), shapeOf(objects[2]));
  for (var i = 0; i < 150; i++) {
    var o = objects[i % objects.length];
    o.x++;
  }
  print(count, 1050);
}
testOwnProp();



function testTypedArrayLength() {
  var ta = new Int32Array(10);
  var lengthHolder = Object.getPrototypeOf(Int32Array.prototype);
  for (var i = 0; i < 150; i++) {
    print(ta.length, i <= 100 ? 10 : (i <= 130 ? "foo" : "bar"));
    print(ta.byteLength, 40);
    print(ta.byteOffset, 0);
    if (i === 100) {
      var desc = Object.getOwnPropertyDescriptor(lengthHolder, "length");
      desc.get = () => "foo";
      Object.defineProperty(lengthHolder, "length", desc);
    }
    if (i === 130) {
      var desc = Object.getOwnPropertyDescriptor(lengthHolder, "length");
      desc.get = () => "bar";
      Object.defineProperty(lengthHolder, "length", desc);
    }
  }
}
testTypedArrayLength();




function testGlobalProp() {
  var g = newGlobal({useWindowProxy: false});
  g.evaluate("" + function test() {
    var arr = [Math, Object];
    var expected = 0;
    for (var i = 0; i < 150; i++) {
      print(timesAccessed, i <= 100 ? i + 1 : (i > 130 ? Infinity : NaN));
      if (i === 100) {
        var desc = Object.getOwnPropertyDescriptor(this, "timesAccessed");
        desc.get = Math.abs;
        Object.defineProperty(this, "timesAccessed", desc);
      }
      if (i === 130) {
        var desc = Object.getOwnPropertyDescriptor(this, "timesAccessed");
        desc.get = Math.min;
        Object.defineProperty(this, "timesAccessed", desc);
      }
    }
  });
  g.evaluate("test()");
}
testGlobalProp();
