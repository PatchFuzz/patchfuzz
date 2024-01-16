function shouldBe(actual, expected) {
    if (actual !== expected)
        throw new Error('bad value: ' + actual);
}

function shouldThrow(func, message) {
    var error = null;
    try {
        func();
    } catch (e) {
        error = e;
    }
    if (!error)
        throw new Error("not thrown.");
    if (String(error) !== message)
        throw new Error("bad error: " + String(error));
}

var originalArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

var array = Array.from(originalArray.values());
shouldBe(array.length, originalArray.length);
for (var i = 0; i < array.length; ++i) {
    shouldBe(array[i], originalArray[i]);
}

function createIterator(callback) {
    var array = [0,1,2,3,4,5];
    var iterator = array[Symbol.iterator]();
    iterator.return = function () {
        iterator.returned = true;
        if (callback)
            return callback(this);
        return { done: true, value: undefined };
    };
    iterator.returned = false;
    return iterator;
}

var iterator = createIterator();
var result = Array.from(iterator);
shouldBe(result.length, 6);
for (var i = 0; i < 6; ++i) {
    shouldBe(result[i], i);
}
shouldBe(iterator.returned, false);


var iterator = createIterator();
shouldThrow(function () {
    var result = Array.from(iterator, function () {
        throw new Error('map func');
    });
}, "Error: map func");
shouldBe(iterator.returned, true);


var iterator = createIterator(function () {
    throw new Error('iterator.return');
});


shouldThrow(function () {
    var result = Array.from(iterator, function () {
        throw new Error('map func');
    });
}, "Error: map func");
shouldBe(iterator.returned, true);


shouldThrow(function () {
    var iterator = [].values();
    iterator[Symbol.iterator] = {};
    Array.from(iterator);
}, "TypeError: Array.from requires that the property of the first argument, items[Symbol.iterator], when exists, be a function");


shouldThrow(function () {
    var iterable = [];
    iterable[Symbol.iterator] = function () {
        throw new Error("iterator");
    };
    Array.from(iterable);
}, "Error: iterator");


(function () {
    var iterable = [0, 1, 2, 3, 4, 5];
    var count = 0;
    var iteratorCallCount = 0;
    Object.defineProperty(iterable, Symbol.iterator, {
        get() {
            ++count;
            return function () {
                ++iteratorCallCount;
                return this.values();
            };
        }
    });
    var generated = Array.from(iterable);
    shouldBe(generated.length, iterable.length);
    for (var i = 0; i < iterable.length; ++i) {
        shouldBe(generated[i], iterable[i]);
    }
    shouldBe(count, 1);
    shouldBe(iteratorCallCount, 1);
}());


(function () {
    var iterable = [0, 1, 2, 3, 4, 5];
    var count = 0;
    iterable[Symbol.iterator] = function () {
        ++count;
        var iterator = this.values();
        Object.defineProperty(iterator, Symbol.iterator, {
            get() {
                throw new Error('iterator[@@iterator] is touched');
            }
        });
        return iterator;
    };
    var generated = Array.from(iterable);
    shouldBe(generated.length, iterable.length);
    for (var i = 0; i < iterable.length; ++i) {
        shouldBe(generated[i], iterable[i]);
    }
    shouldBe(count, 1);
}());
