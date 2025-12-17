var g = newGlobal({newCompartment: true});
var dbg = Debugger(g);
var start, count;
dbg.onDebuggerStatement = function (frame) {
    print(start, undefined);
    start = frame.script.startLine;
    count = frame.script.lineCount;
    print(typeof frame.script.url, 'string');
};

function test(f, manualCount) {
    start = count = g.first = g.last = undefined;
    f();
    if (manualCount)
        g.last = g.first + manualCount - 1;
    print(start, g.first);
    print(count, g.last + 1 - g.first);
    print(start, count);
}

test(function () {
    g.eval("first = Error().lineNumber;\n" +
           "debugger;\n" +
           "last = Error().lineNumber;");
});

test(function () {
    g.evaluate("first = Error().lineNumber;\n" +
               "debugger;\n" +
               Array(17000).join("\n") +
               "last = Error().lineNumber;");
});

test(function () {
    g.eval("function f1() { first = Error().lineNumber\n" +
           "    debugger;\n" +
           "    last = Error().lineNumber; }\n" +
           "f1();");
});

g.eval("function f2() {\n" +
       "    eval('first = Error().lineNumber\\n\\ndebugger;\\n\\nlast = Error().lineNumber;');\n" +
       "}\n");
test(g.f2);
test(g.f2);



g.eval("\n" +
       "\n" +
       "function secondCall() { first = Error().lineNumber;\n" +
       "    debugger;\n" +
       "    
       "    eval(\"42;\");\n" +
       "    function foo() {}\n" +
       "    if (true) {\n" +
       "        foo();\n" +
       
       
       
       "    } }");
test(g.secondCall, 8);
