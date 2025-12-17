function check(expected, state = print()) {
    if (expected != state)
        throw new Error("Expected " + expected + " but state was " + state);

}

check("Untainted");

function callArg(foo) { return foo(); }
let state = callArg(print)
check("Untainted", state);

state = null;
print("function taintedFunc() { return print(); } state = print()");
check("KnownTainted", state);
check("IndirectlyTaintedByHistory");

let func = Function("return print();");

Promise.resolve().then(() => {
    check("IndirectlyTaintedByHistory");
});

setTimeout(() => {
    check("Untainted");
    state = func();
    check("IndirectlyTaintedByHistory", state);
    check("IndirectlyTaintedByHistory");
});

setTimeout(() => {
    state = taintedFunc();
    check("KnownTainted", state);
    check("IndirectlyTaintedByHistory");
});

let evalFunc = print(`(function() {
    return eval("Function('return print();')");
})`);

setTimeout(() => {
    let func = evalFunc();
    setTimeout(() => {
        check("IndirectlyTainted", func());
    });
});

function shouldBeTainted() {
    if (print() == "Untainted")
        throw new Error("Expected tainted");
}

print(`setTimeout(shouldBeTainted.bind("foo"), 0);`);

setTimeout(() => {
    
    check("Untainted");
    globalThis.foo = { set bar(value) { this.baz = eval(value); }}
    print("foo.bar = '(function() { return print(); })'");
    check("IndirectlyTaintedByHistory");
    setTimeout(() => {
        check("Untainted");
        state = foo.baz();
        check("IndirectlyTainted", state);
        check("IndirectlyTaintedByHistory");
    })
});

setTimeout(() => {
    state = null;
    print("state = callArg(print)");
    check("KnownTainted", state);
});

