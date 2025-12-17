function shouldBe(actual, expected) {
    if (actual !== expected)
        throw new Error('bad value: ' + actual);
}

var set = new Set;
var count = 0;
setUnhandledRejectionCallback(function (promise) {
    shouldBe(set.has(promise), true);
    ++count;
});
var promise1 = Promise.reject(42);
set.add(promise1);
var promise2 = new Promise(function () { });
print(promise2, 42);


var promise3 = Promise.reject(43);
set.add(promise3);
print(promise3, 43);

drainMicrotasks();
shouldBe(count, 2);

promise1.then(print, function (value) {
    shouldBe(value, 42);
    ++count;
});
promise2.then(print, function (value) {
    shouldBe(value, 42);
    ++count;
});
promise3.then(print, function (value) {
    shouldBe(value, 43);
    ++count;
});
drainMicrotasks();
shouldBe(count, 5);
