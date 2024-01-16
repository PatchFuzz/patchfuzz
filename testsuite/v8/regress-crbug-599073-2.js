



Object.defineProperty(Boolean.prototype, "v", {set:constructor});

function foo(b) { b.v = 1; }

foo(true);
foo(true);
foo(true);
