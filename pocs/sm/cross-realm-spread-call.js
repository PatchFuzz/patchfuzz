function testArgs(a, b, c) {
  return `${a} ${b} ${c}`;
}
function test() {
  var g = newGlobal();
  
  g.evaluate(`
    let arrIterProto = Object.getPrototypeOf([][Symbol.iterator]());
    let count = 0;
    arrIterProto.next = function() {
      if (count > 2) {
        count = 0;
        return {done: true, value: 0};
      }
      return {done: false, value:count++ * 5} };
  `);
  for (var i = 0; i < 30; i++) {
    var myRealmArgs = () => (function() { return arguments; })(1, 2, 3);
    var crossRealmArgs = () => g.evaluate(`(function() { return arguments; })(1, 2, 3)`);  
    print(testArgs(...myRealmArgs()), "1 2 3");
    print(testArgs(...crossRealmArgs()), "0 5 10");
    var mixed = (i & 1) ? myRealmArgs() : crossRealmArgs();
    print(testArgs(...mixed), (i & 1) ? "1 2 3" : "0 5 10");
  }
}
test();
