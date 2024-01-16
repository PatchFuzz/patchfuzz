


load(libdir + "asserts.js");

assertThrowsInstanceOf(() => {
    for (let x = x; null.foo; null.foo++) {}
}, ReferenceError);

assertThrowsInstanceOf(() => {
    for (let x = eval('x'); null.foo; null.foo++) {}
}, ReferenceError);

assertThrowsInstanceOf(() => {
    for (let x = function () { with ({}) return x; }(); null.foo; null.foo++) {}
}, ReferenceError);
