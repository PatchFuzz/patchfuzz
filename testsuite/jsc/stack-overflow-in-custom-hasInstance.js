

function f() {}

var fn = f;
for (var i = 0; i < 100000; ++i) {
    fn = fn.bind(undefined, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16);

    
    Object.defineProperty(fn, Symbol.hasInstance, {
        value: undefined, writable: true, enumerable: true, writable: true
    });

    
    Object.defineProperty(fn, "name", {
        value: "", writable: true, enumerable: true, writable: true
    });
}

var exception;
try {
    ({}) instanceof fn;
} catch (e) {
    exception = e;
    if (exception != "RangeError: Maximum call stack size exceeded.")
        throw "FAILED";
}
