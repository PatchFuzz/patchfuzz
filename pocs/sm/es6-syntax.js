function print(str) {
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


print("function* f(x = yield) {}");
print("function* f(x = yield 17) {}");
print("function* f([yield]) {}");
print("function* f({ yield }) {}");
print("function* f(...yield) {}");


print("for yield");
print("for yield (;;) {}");
print("for yield (x of y) {}");
print("for yield (var i in o) {}");


print("function* f() yield 7");
