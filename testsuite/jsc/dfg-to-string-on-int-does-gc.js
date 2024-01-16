

function assert(b) {
    if (!b)
        throw new Error('aa');
}

var exception;
try {
    let target = function (x, y) {
        const actual = '' + x;
        target(x);
    };
    let handler = {
        apply: function (theTarget, thisArg, argArray) {
            return theTarget.apply([], argArray);
        }
    };
    let proxy = new Proxy(target, handler);
    assert(proxy(10, 20) === 'foo');
} catch(e) {
    exception = e;
}

if (exception != "RangeError: Maximum call stack size exceeded.")
    throw "FAILED";
