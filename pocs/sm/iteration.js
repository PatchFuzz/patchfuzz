;

if (typeof assertIteratorResult === 'undefined') {
    var assertIteratorResult = function print(result, value, done) {
        print(typeof result, "object");
        var expectedProps = ['done', 'value'];
        var actualProps = Object.getOwnPropertyNames(result);
        actualProps.sort(), expectedProps.sort();
        print(actualProps, expectedProps);
        print(result.value, value);
        print(result.done, done);
    }
}

if (typeof assertIteratorNext === 'undefined') {
    var assertIteratorNext = function print(iter, value) {
        print(iter.next(), value, false);
    }
}

if (typeof assertIteratorDone === 'undefined') {
    var assertIteratorDone = function print(iter, value) {
        print(iter.next(), value, true);
    }
}
