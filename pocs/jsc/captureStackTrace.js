let obj = {};

function foo(caller) {
    bar(caller);
}

function bar(caller) {
    baz(caller);
}

function baz(caller) {
    Error.captureStackTrace(obj, caller);
}

[1].forEach(() => { foo(foo); });

if (obj.stack.split("\n").length !== 3)
    throw new Error(obj.stack);

[1].forEach(() => { foo(Array.prototype.forEach); });

if (obj.stack.split("\n").length !== 1)
    throw new Error(obj.stack);

bar(foo)
if (obj.stack !== "")
    throw new Error(obj.stack);

bar(baz)

if (obj.stack.split("\n").length !== 2)
    throw new Error(obj.stack);


bar(null)
if (obj.stack.split("\n").length !== 3)
    throw new Error(obj.stack);


foo(obj)
if (obj.stack.split("\n").length !== 4)
    throw new Error(obj.stack);