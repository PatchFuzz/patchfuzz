

load(libdir + 'asserts.js');
load(libdir + 'iteration.js');



var testSet = new Set();

function callback(value, key, set) {
    assertEq(value, key);
    testSet.add(value);
    assertEq(set.has(key), true);
}

var initialSet = new Set(['a', 1, undefined]);
initialSet.forEach(callback);


var iterator = initialSet[Symbol.iterator]();
var count = 0;
for (var v of testSet) {
    assertEq(initialSet.has(v), true);
    assertIteratorNext(iterator, v);
    count++;
}


assertEq(initialSet.size, testSet.size);
assertEq(initialSet.size, count);

var x = { abc: 'test'};
function callback2(value, key, set) {
    assertEq(x, this);
}
initialSet = new Set(['a']);
initialSet.forEach(callback2, x);



var m = new Map([['a', 1], ['b', 2.3], ['c', undefined]]);
assertThrowsInstanceOf(function() {
    Set.prototype.forEach.call(m, callback);
}, TypeError, "Set.prototype.forEach should raise TypeError if not a used on a Set");

var fn = 2;
assertThrowsInstanceOf(function() {
    initialSet.forEach(fn);
}, TypeError, "Set.prototype.forEach should raise TypeError if callback is not a function");
