function f() {
    foo = f.caller;
}


new Number({ valueOf: f });

if (foo !== null)
    throw new Error(foo);

foo = 1;


[1].slice({ valueOf: f });

if (foo !== null)
    throw new Error(foo);

foo = 1;


[1].map(f)

if (foo !== null)
    throw new Error(foo);
