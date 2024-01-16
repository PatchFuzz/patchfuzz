


function assertSyntaxError(str) {
    var msg;
    var evil = eval;
    try {
        
        evil(str);
    } catch (exc) {
        if (exc instanceof SyntaxError)
            return;
        msg = "Assertion failed: expected SyntaxError, got " + exc;
    }
    if (msg === undefined)
        msg = "Assertion failed: expected SyntaxError, but no exception thrown";
    throw new Error(msg + " - " + str);
}


assertSyntaxError("function* f(x = yield) {}");
assertSyntaxError("function* f(x = yield 17) {}");
assertSyntaxError("function* f([yield]) {}");
assertSyntaxError("function* f({ yield }) {}");
assertSyntaxError("function* f(...yield) {}");


assertSyntaxError("for yield");
assertSyntaxError("for yield (;;) {}");
assertSyntaxError("for yield (x of y) {}");
assertSyntaxError("for yield (var i in o) {}");


assertSyntaxError("function* f() yield 7");
