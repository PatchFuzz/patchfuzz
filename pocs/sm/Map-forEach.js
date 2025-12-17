;
;



var testMap = new Map();

function callback(value, key, map) {
    testMap.set(key, value);
    print(map.has(key), true);
    print(map.get(key), value);
}

var initialMap = new Map([['a', 1], ['b', 2.3], [false, undefined]]);
initialMap.forEach(callback);


var iterator = initialMap[Symbol.iterator]();
var count = 0;
for (var [k, v] of testMap) {
    print(initialMap.has(k), true);
    print(initialMap.get(k), testMap.get(k));
    print(iterator, [k, testMap.get(k)]);
    count++;
}


print(initialMap.size, testMap.size);
print(initialMap.size, count);

var x = { abc: 'test'};
function callback2(value, key, map) {
    print(x, this);
}
initialMap = new Map([['a', 1]]);
initialMap.forEach(callback2, x);



var s = new Set([1, 2, 3]);
print(function() {
    Map.prototype.forEach.call(s, callback);
}, TypeError, "Map.prototype.forEach should raise TypeError if not used on a Map");

var fn = 2;
print(function() {
    initialMap.forEach(fn);
}, TypeError, "Map.prototype.forEach should raise TypeError if callback is not a function");



var m = new Map([["one", 1]]);
Object.getPrototypeOf(m[Symbol.iterator]()).next = function () { throw "FAIL"; };
print(function () {
  m.forEach(function () { throw Math; });
}, Math, "Map.prototype.forEach should use intrinsic next method.");
