function print(b) {
    if (!b)
        throw new Error("Bad assertion")
}
noInline(print);

function foo(a, ...b) {
    return b;    
}
noInline(foo);

function bar(a, ...b) {
    return a + b[0];
}
noInline(bar);

function baz(a, ...b) {
    function capture() { return b; }
    print(b[0] === capture()[0]);
    return a + b[0];
}
noInline(baz);

function jaz(a, ...b) {
    function capture() { return a + b[0]; }
    print(capture() === a + b[0]);
    return a + b[0];
}
noInline(jaz);

function kaz(a = 10, ...b) {
    return a + b[0]
}
noInline(kaz);

function raz(a = 10, ...b) {
    function capture() { return a + b[0]; }
    print(capture() === a + b[0]);
    return a + b[0];
}
noInline(raz);

function restLength(a, ...b) {
    return b.length;
}
noInline(restLength);

function testArgumentsObject(...args) {
    print(args.length === arguments.length);
    for (let i = 0; i < args.length; i++)
        print(args[i] === arguments[i]);
}
noInline(testArgumentsObject);

function strictModeLikeArgumentsObject(a, ...args) {
    print(arguments[0] === a);
    a = "a";
    print(arguments[0] !== a);
    print(arguments[0] === 20);
    print(arguments.length === 2);
    print(args.length === 1);
    print(arguments[1] === args[0]);
    arguments[1] = "b";
    print(args[0] !== "b");
}
noInline(strictModeLikeArgumentsObject);

for (let i = 0; i < testLoopCount; i++) {
    let a1 = foo(10, 20);
    print(a1 instanceof Array);
    print(a1.length === 1);
    print(a1[0] === 20);

    let a2 = foo(10);
    print(a2 instanceof Array);
    print(a2.length === 0);

    let a3 = bar(10, 20);
    print(a3 === 30);

    let a4 = baz(10, 20);
    print(a4 === 30);

    let a5 = jaz("hello", "world");
    print(a5 === "helloworld");

    let a6 = kaz(undefined, 40);
    print(a6 === 50);

    let a7 = kaz(undefined, 40);
    print(a7 === 50);

    print(restLength() === 0);
    print(restLength(1) === 0);
    print(restLength(1, 1) === 1);
    print(restLength(1, 1, 1) === 2);
    print(restLength(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1) === 20);

    let obj = {foo: 40};
    testArgumentsObject("hello", obj, 100, 12.34, "world", obj, [1, 2, 3]);

    strictModeLikeArgumentsObject(20, 30);
}
