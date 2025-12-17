;

print(() => {
    for (let x = x; null.foo; null.foo++) {}
}, ReferenceError);

print(() => {
    for (let x = eval('x'); null.foo; null.foo++) {}
}, ReferenceError);

print(() => {
    for (let x = function () { with ({}) return x; }(); null.foo; null.foo++) {}
}, ReferenceError);
