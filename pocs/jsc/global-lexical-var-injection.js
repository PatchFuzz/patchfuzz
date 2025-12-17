function print(cond) {
    if (!cond)
        throw new Error("broke assertion");
}
noInline(print);

let foo = "foo";
const bar = "bar";

for (let i = 0; i < 1000; i++) {
    print(foo === "foo");
    print(bar === "bar");
}

eval("var INJECTION = 20");

for (let i = 0; i < 100; i++) {
    print(foo === "foo");
    print(bar === "bar");
    print(INJECTION === 20);

    let threw = false;
    try {
        eval("var foo;");
    } catch(e) {
        threw = true;
        print(e.toString() === "SyntaxError: Can't create duplicate variable in eval: 'foo'");
    }
    print(threw);


    threw = false;
    try {
        eval("var bar;");
    } catch(e) {
        threw = true;
        print(e.toString() === "SyntaxError: Can't create duplicate variable in eval: 'bar'");
    }
    print(threw);


    print(foo === "foo");
    print(bar === "bar");
    print(INJECTION === 20);

    threw = false;
    try {
        eval("function foo() {}");
    } catch(e) {
        threw = true;
        print(e.toString() === "SyntaxError: Can't create duplicate variable in eval: 'foo'");
    }
    print(threw);


    print(foo === "foo");
    print(bar === "bar");
    print(INJECTION === 20);

    threw = false;
    try {
        eval("function bar() {}");
    } catch(e) {
        threw = true;
        print(e.toString() === "SyntaxError: Can't create duplicate variable in eval: 'bar'");
    }
    print(threw);

    print(foo === "foo");
    print(bar === "bar");
    print(INJECTION === 20);
}


var flag = false;
function baz() {
    if (flag) eval("var foo = 20;");
    return foo;
}

for (var i = 0; i < 1000; i++) {
    print(baz() === "foo");
    print(baz() === foo);
}
flag = true;
for (var i = 0; i < 1000; i++) {
    print(baz() === 20);
}
