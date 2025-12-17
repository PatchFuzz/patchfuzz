try {
    eval("const x = 1;const x = 1;");
} catch (e) {
    print("Test 1:");
    print(e);
}
try {
    eval("const x = 1;let x = 1;");
} catch (e) {
    print("Test 2:");
    print(e);
}
try {
    eval("let x = 1;const x = 1;");
} catch (e) {
    print("Test 3:");
    print(e);
}
try {
    eval("var x = 1;const x = 1;");
} catch (e) {
    print("Test 4:");
    print(e);
}
try {
    eval("const x = 1;var x = 1;");
} catch (e) {
    print("Test 5:");
    print(e);
}
try {
    eval("var x = 1;let x = 1;");
} catch (e) {
    print("Test 6:");
    print(e);
}
try {
    eval("const x = 1;const x = 1;");
} catch (e) {
    print("Test 7:");
    print(e);
}
try {
    eval("var x = 1;const x = 1;const x = 1;");
} catch (e) {
    print("Test 8:");
    print(e);
}
try {
    eval("const x = 1;const x = 1;var x = 1;");
} catch (e) {
    print("Test 9:");
    print(e);
}



try {
    eval("(function f(){ const x = 1;const x = 1; })()");
} catch (e) {
    print("Test a1:");
    print(e);
}
try {
    eval("(function f(){ const x = 1;let x = 1; })()");
} catch (e) {
    print("Test a2:");
    print(e);
}
try {
    eval("(function f(){ let x = 1;const x = 1; })()");
} catch (e) {
    print("Test a3:");
    print(e);
}
try {
    eval("(function f(){ var x = 1;const x = 1; })()");
} catch (e) {
    print("Test a4:");
    print(e);
}
try {
    eval("(function f(){ const x = 1;var x = 1; })()");
} catch (e) {
    print("Test a5:");
    print(e);
}
try {
    eval("(function f(){ var x = 1;let x = 1; })()");
} catch (e) {
    print("Test a6:");
    print(e);
}
try {
    eval("(function f(){ const x = 1;const x = 1; })()");
} catch (e) {
    print("Test a7:");
    print(e);
}
try {
    eval("(function f(){ var x = 1;const x = 1;const x = 1; })()");
} catch (e) {
    print("Test a8:");
    print(e);
}
try {
    eval("(function f(){ const x = 1;const x = 1;var x = 1; })()");
} catch (e) {
    print("Test a9:");
    print(e);
}


try {
    eval("function a() { function f(x) { const x = 1; } } a();");
} catch (e) {
    print("Test b1:");
    print(e);
}
try {
    eval("function a() { function f(x) { let x; } } a();");
} catch (e) {
    print("Test b2:");
    print(e);
}

try {
    eval("var x; { function x() {}; } let x;");
}
catch (e) {
    print("Test b3:");
    print(e);
}
