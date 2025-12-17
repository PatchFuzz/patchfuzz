;
;



var testSet = new Set();

function callback(value, key, set) {
    print(value, key);
    testSet.add(value);
    print(set.has(key), true);
}

var initialSet = new Set(['a', 1, undefined]);
initialSet.forEach(callback);


var iterator = initialSet[Symbol.iterator]();
var count = 0;
for (var v of testSet) {
    print(initialSet.has(v), true);
    print(iterator, v);
    count++;
}


print(initialSet.size, testSet.size);
print(initialSet.size, count);

var x = { abc: 'test'};
function callback2(value, key, set) {
    print(x, this);
}
initialSet = new Set(['a']);
initialSet.forEach(callback2, x);



var m = new Map([['a', 1], ['b', 2.3], ['c', undefined]]);
print(function() {
    Set.prototype.forEach.call(m, callback);
}, TypeError, "Set.prototype.forEach should raise TypeError if not a used on a Set");

var fn = 2;
print(function() {
    initialSet.forEach(fn);
}, TypeError, "Set.prototype.forEach should raise TypeError if callback is not a function");
