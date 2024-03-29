

function assert(b) {
    if (!b)
        throw new Error('aa');
}

let alternate = true;
var exception;
try {
    function alter(x) {
        alternate = !alternate;
        if (alternate)
            return new String(x);
        return x;
    }
    noInline(alter);
    let target = function (x, y) {
        const actual = '' + alter(x);
        target(x);
    };
    let handler = {
        apply: function (theTarget, thisArg, argArray) {
            return theTarget.apply([], argArray);
        }
    };
    let proxy = new Proxy(target, handler);
    assert(proxy("10", "20") === 'foo');
} catch(e) {
    exception = e;
}

if (exception != "RangeError: Maximum call stack size exceeded.")
    throw "FAILED";
