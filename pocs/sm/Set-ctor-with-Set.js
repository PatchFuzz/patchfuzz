;

function testOptimized1() {
  var obj = {};
  var s = new Set([obj, undefined, 3.1415]);
  for (var i = 0; i < 15; i++) {
    var clone = new Set(s);
    s.add(i); 
    s = clone;
  }
  print(s.size, 3);
  print(s.has(obj), true);
  print(s.has(undefined), true);
  print(s.has(3.1415), true);
  print(Array.from(s).toString(), "[object Object],,3.1415");
  return s;
}
testOptimized1();

function testOptimized2() {
  var s = new Set();
  for (var i = 0; i < 15; i++) {
    s = new Set(s);
    s.add(i);
  }
  print(s.size, 15);
  print(Array.from(s).toString(), "0,1,2,3,4,5,6,7,8,9,10,11,12,13,14");
  return s;
}
testOptimized2();

function testOtherProto() {
  var s = new Set([1, 2, 3]);
  Object.setPrototypeOf(s, null);
  for (var i = 0; i < 15; i++) {
    print(() => new Set(s), TypeError);
  }
}
testOtherProto();

function testOwnIteratorProp() {
  var s = new Set([1, 2, 3]);
  var c = 0;
  s[Symbol.iterator] = function() {
    c++;
    return {next() { return {done: true}; }};
  };
  for (var i = 0; i < 15; i++) {
    print(new Set(s).size, 0);
  }
  print(c, 15);
}
testOwnIteratorProp();

function testCustomProtoIteratorProp() {
  
  newGlobal().evaluate(`
    var s = new Set([1, 2, 3]);
    var c = 0;
    print(getFuseState().OptimizeSetObjectIteratorFuse.intact, true);
    Set.prototype[Symbol.iterator] = function() {
      c++;
      return {next() { return {done: true}; }};
    };
    print(getFuseState().OptimizeSetObjectIteratorFuse.intact, false);
    for (var i = 0; i < 15; i++) {
      print(new Set(s).size, 0);
    }
    print(c, 15);
  `);
}
testCustomProtoIteratorProp();

function testCustomProtoIteratorPropEmpty() {
  newGlobal().evaluate(`
    var s = new Set();
    var c = 0;
    print(getFuseState().OptimizeSetObjectIteratorFuse.intact, true);
    Set.prototype[Symbol.iterator] = function() {
      c++;
      return {next() { return {done: true}; }};
    };
    print(getFuseState().OptimizeSetObjectIteratorFuse.intact, false);
    for (var i = 0; i < 15; i++) {
      print(new Set(s).size, 0);
    }
    print(c, 15);
  `);
}
testCustomProtoIteratorPropEmpty();

function testCustomIteratorNext() {
  newGlobal().evaluate(`
    var iterProto = Object.getPrototypeOf(new Set()[Symbol.iterator]());
    var s = new Set([1, 2, 3]);
    var c = 0;
    print(getFuseState().OptimizeSetObjectIteratorFuse.intact, true);
    iterProto.next = function() {
      c++;
      return {done: true};
    };
    print(getFuseState().OptimizeSetObjectIteratorFuse.intact, false);
    for (var i = 0; i < 15; i++) {
      print(new Set(s).size, 0);
    }
    print(c, 15);
  `);
}
testCustomIteratorNext();
