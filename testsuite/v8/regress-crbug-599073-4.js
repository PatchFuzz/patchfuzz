



Object.defineProperty(Number.prototype, "v", {set:constructor});

function foo(b) { b.v = 1; }

foo(2);
foo(3);
foo(4);
