



Object.defineProperty(Boolean.prototype, "v", {get:constructor});

function foo(b) { return b.v; }

foo(true);
foo(true);
foo(true);
