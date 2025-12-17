function print(b) {
    if (!b)
        throw new Error("bad");
}

function test(f) {
    for (let i = 0; i < 1000; i++)
        f();
}

test(function() {
    function foo(a, b) {
        print(arguments[0] === a);
        print(arguments[1] === b);
        print(arguments.length === 2);
        arguments[0] = "hello";
        arguments[1] = "world";
        print(a === "hello");
        print(b === "world");
    }
    foo(null, null);
});

test(function() {
    function foo(a, b) {
        print(arguments[0] === a);
        print(arguments[1] === b);
        print(arguments.length === 2);
        a = "hello";
        b = "world";
        print(arguments[0] === "hello");
        print(arguments[1] === "world");
    }
    foo(null, null);
});

test(function() {
    function foo(a, b, ...rest) {
        print(arguments[0] === a);
        print(arguments[1] === b);
        print(arguments.length === 2);
        arguments[0] = "hello";
        arguments[1] = "world";
        print(a === null);
        print(b === null);
    }
    foo(null, null);
});

test(function() {
    function foo(a, b, ...rest) {
        print(arguments[0] === a);
        print(arguments[1] === b);
        print(arguments.length === 2);
        a = "hello";
        b = "world";
        print(arguments[0] === null);
        print(arguments[1] === null);
    }
    foo(null, null);
});

test(function() {
    function foo(a, b, {destructure}) {
        print(arguments[0] === a);
        print(arguments[1] === b);
        print(arguments.length === 3);
        arguments[0] = "hello";
        arguments[1] = "world";
        print(a === null);
        print(b === null);
    }
    foo(null, null, {});
});

test(function() {
    function foo(a, b, {destructure}) {
        print(arguments[0] === a);
        print(arguments[1] === b);
        print(arguments.length === 3);
        a = "hello";
        b = "world";
        print(arguments[0] === null);
        print(arguments[1] === null);
    }
    foo(null, null, {});
});

test(function() {
    function foo(a, b, defaultParam = 20) {
        print(arguments[0] === a);
        print(arguments[1] === b);
        print(arguments.length === 3);
        arguments[0] = "hello";
        arguments[1] = "world";
        print(a === null);
        print(b === null);
    }
    foo(null, null, {});
});

test(function() {
    function foo(a, b, defaultParam = 20) {
        print(arguments[0] === a);
        print(arguments[1] === b);
        print(arguments.length === 3);
        a = "hello";
        b = "world";
        print(arguments[0] === null);
        print(arguments[1] === null);
    }
    foo(null, null, {});
});

test(function() {
    let obj = {}
    function foo(a, b, {foo = b}) {
        print(foo === b);
        print(foo === obj);
    }
    foo(null, obj, {});
});

test(function() {
    let obj = {}
    function foo(a, b, {foo = b}) {
        print(foo === b);
        print(foo === obj);
        function capB() { return b; }
    }
    foo(null, obj, {});
});

test(function() {
    let obj = {}
    function foo(a, b, {foo = b}) {
        print(foo === 25);
    }
    foo(null, obj, {foo: 25});
});

test(function() {
    let obj = {}
    function foo(a, b, {foo = function() { return b; }}) {
        print(foo() === b);
        print(foo() === obj);
        return foo;
    }
    let result = foo(null, obj, {});
    print(result() === obj);
});

test(function() {
    let obj = {}
    function foo(a, b, [foo = function() { return b; }]) {
        print(foo() === b);
        print(foo() === obj);
        return foo;
    }
    let result = foo(null, obj, [undefined]);
    print(result() === obj);
});

test(function() {
    let obj = {}
    function foo(a, b, [foo = function() { return e; }], {d = foo()}, e) { }
    foo(null, obj, [], {d:null}, 20);
});

test(function() {
    let obj = {}
    function foo(a, b, [foo = function() { return e; }], {d = foo()}, e) { }
    try {
        foo(null, obj, [], {}, 20);
    } catch(e) {
        print(e.toString() === "ReferenceError: Cannot access 'e' before initialization.");
    }
});

test(function() {
    let obj = {}
    function foo(a, b, [foo = function() { return e; }], e, {d = foo()}) { 
        return d;
    }
    print(foo(null, obj, [], 20, {}) === 20);
});

test(function() {
    let obj = {}
    function foo(a, b, [foo = function() { return e; }], e, {d = foo()}) { 
        var d;
        print(d === 20);
        return d;
    }
    print(foo(null, obj, [], 20, {}) === 20);
});

test(function() {
    function foo(b, {a = function() { return b; }}) { 
        var b = 25;
        print(b === 25);
        print(a() === 20);
    }
    foo(20, {});
});

test(function() {
    function foo(b, {a = function() { return typeof inner; }}) { 
        let inner = 25;
        print(inner === 25);
        print(a() === "undefined");
    }
    foo(20, {});
});

test(function() {
    let obj = {};
    let inner = obj;
    function foo(b, {a = function() { return inner; }}) { 
        let inner = 25;
        print(inner === 25);
        print(a() === obj);
    }
    foo(20, {});
});

test(function() {
    let obj = {};
    let inner = obj;
    let foo = (b, {a = function() { return inner; }}) => {
        let inner = 25;
        print(inner === 25);
        print(a() === obj);
    }
    foo(20, {});
});
