



Object.defineProperty(Number.prototype, "v", {get:constructor});

function foo(b) { return b.v; }

foo(2);
foo(3);
foo(4);
