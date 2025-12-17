function print(b) {
    if (!b)
        throw new Error("Bad");
}

function hasSyntaxError(f) {
    let threw = false;
    try {
        f();
    } catch(e) {
        threw = e instanceof SyntaxError;
    }
    return threw;
}

let functions = [
    Function,
    (function*foo(){}).__proto__.constructor,
    (async function foo(){}).__proto__.constructor,
];

function testError(...args) {
    for (let f of functions) {
        print(hasSyntaxError(() => (f(...args))));
    }
}

function testOK(...args) {
    for (let f of functions) {
        print(!hasSyntaxError(() => (f(...args))));
    }
}

testError("a", "b", "){");
testError("a=super()", "body;");
testError("a=super.foo", "body;");
testError("super();");
testError("super.foo;");
testError("a", "b", "");
testError("");
testError("a=20", "'use strict';");
testError("{a}", "'use strict';");
testError("...args", "'use strict';");
testError("...args", "b", "");

testOK("
testOK("", "");
testOK("a", "", "'use strict'; let b");
testOK("{a}", "return a;");
testOK("a", "...args", "");
testOK("");
testOK("let a");
testOK(undefined);
testOK("

let str = "";
testOK({toString() { str += "1"; return "a"}}, {toString() { str += "2"; return "b"}}, {toString() { str += "3"; return "body;"}});
let target = "";
for (let i = 0; i < functions.length; ++i)
    target += "123";
print(str === target);
