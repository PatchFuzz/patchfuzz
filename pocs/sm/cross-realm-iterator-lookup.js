function test() {
  var g = newGlobal({sameCompartmentAs: this});
  for (var i = 0; i < 30; i++) {
    var myRealmArgs = (function() { return arguments; })(1, 2, 3);
    var crossRealmArgs = g.evaluate(`(function() { return arguments; })(1, 2, 3)`);
    var args = (i & 1) ? myRealmArgs : crossRealmArgs;
    var createIter = args[Symbol.iterator];
    print(objectGlobal(createIter), (i & 1) ? this : g);
    var iter = createIter.call(args);
    print(objectGlobal(iter), (i & 1) ? this : g);
    print(iter.next().value, 1);
  }
}
test();
