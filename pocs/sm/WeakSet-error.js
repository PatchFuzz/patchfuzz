;
;

function testMethod(name) {
    var method = WeakSet.prototype[name];

    print(function() { method.call(1); }, TypeError);
    print(function() { method.call({}); }, TypeError);
    print(function() { method.call(new WeakMap); }, TypeError);
    print(function() { method.call(WeakSet.prototype); }, TypeError);
}

testMethod("has");
testMethod("add");
testMethod("delete");
testMethod("clear");

print(function() { var ws = new WeakSet(); ws.add(1); }, TypeError);
print(function() { new WeakSet({[Symbol.iterator]: 2}) }, TypeError);
print(typeof [][Symbol.iterator], "function");

print(function() { WeakSet(); }, TypeError);
