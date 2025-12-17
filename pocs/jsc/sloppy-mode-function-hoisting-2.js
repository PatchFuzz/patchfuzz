function print(x) {
    if (!x)
        throw new Error("Bad assertion!");
}

function test(fn) {
    for (var i = 0; i < 1000; i++)
        fn();
}

test(function() {
    print(foo === undefined);

    {
        print(foo() === 1);
        function foo() { return 1; }
        print(foo() === 1);
    }

    print(foo() === 1);

    {
        let foo = 1;

        {
            print(foo() === 2);
            function foo() { return 2; }
            print(foo() === 2);
        }
    }

    print(foo() === 1);
});

test(function() {
    print(foo === undefined);

    {
        print(foo() === 1);
        function foo() { return 1; }
        print(foo() === 1);
    }

    print(foo() === 1);

    {
        {{{
            print(foo() === 2);
            function foo() { return 2; }
            print(foo() === 2);
        }}}

        let foo = 1;
    }

    print(foo() === 1);
});

test(function() {
    print(foo === undefined);
    const err = new Error();

    try {
        print(foo() === 1);
        function foo() { return 1; }

        throw err;
    } catch (foo) {
        print(foo === err);

        {
            print(foo() === 2);
            function foo() { return 2; }
            print(foo() === 2);
        }

        print(foo === err);
    }

    print(foo() === 2);
});

test(function() {
    print(foo === undefined);
    const err = new Error();
    err.foo = err;

    try {
        print(foo() === 1);
        function foo() { return 1; }

        throw err;
    } catch ({foo}) {
        print(foo === err);

        {
            print(foo() === 2);
            function foo() { return 2; }
            print(foo() === 2);
        }

        print(foo === err);
    }

    print(foo() === 1);
});

test(function() {
    print(foo === undefined);
    const err = new Error();
    err.foo = err;

    try {
        print(foo() === 1);
        function foo() { return 1; }

        throw err;
    } catch (foo) {
        print(foo === err);

        {
            {{
                print(foo() === 2);
                function foo() { return 2; }
                print(foo() === 2);
            }}

            const foo = 1;
        }

        print(foo === err);
    }

    print(foo() === 1);
});

eval("if (true) { { function foo1() {} } } let foo1;");
eval("if (true) { function foo2() {} } let foo2;");
eval("{ if (true) function foo3() {} } let foo3;");

print(typeof foo1 === "undefined");
print(typeof foo2 === "undefined");
print(typeof foo3 === "undefined");

test(function() {
    print(foo === undefined);

    {
        print(foo() === 1);
        function foo() { return 1; }
        print(foo() === 1);

        {
            print(foo() === 2);
            function foo() { return 2; }
            print(foo() === 2);
        }
    }

    print(foo() === 1);
});

try {
    eval(`try {} catch (foo) { function foo() {} }`);
    throw new Error("eval() didn't throw()!");
} catch (err) {
    print(err.toString() === "SyntaxError: Cannot declare a function that shadows a let/const/class/function variable 'foo'.");
}

try {
    eval(`"use strict"; { function foo() {} function foo() {} }`);
    throw new Error("eval() didn't throw()!");
} catch (err) {
    print(err.toString() === "SyntaxError: Cannot declare a function that shadows a let/const/class/function variable 'foo'.");
}
