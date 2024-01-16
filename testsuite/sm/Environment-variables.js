


load(libdir + "asserts.js");

var cases = [
    
    "x = VAL; @@",
    "var x = VAL; @@",
    "Object.prototype.x = VAL; @@",

    
    "let x = VAL; @@",
    "{ let x = VAL; @@ }",
    "try { throw VAL; } catch (x) { @@ }",
    "try { throw VAL; } catch (x) { @@ }",
    "for (let x of [VAL]) { @@ }",
    "switch (0) { default: let x = VAL; @@ }",

    
    "function f(x) { @@ } f(VAL);",
    "function f([w, x]) { @@ } f([0, VAL]);",
    "function f({v: x}) { @@ } f({v: VAL});",
    "function f([w, {v: x}]) { @@ } f([0, {v: VAL}]);",

    
    "function f() { var x = VAL; @@ } f();",
    "function f() { let x = VAL; @@ } f();",
    "function f() { function x() {} x = VAL; @@ } f();",

    
    "function f(s) { eval(s); @@ } f('var x = VAL');",
    "var x = VAL; function f(s) { eval('var x = 0;'); eval(s); @@ } f('delete x;');",
    "function f(obj) { with (obj) { @@ } } f({x: VAL});",
    "function f(obj) { with (obj) { @@ } } f(Object.create({x: VAL}));",
    "function f(b) { if (b) { function x(){} } x = VAL; @@ } f(1);",
];

var nextval = 1000;

function test(code, debugStmts, followupStmts) {
    var val = nextval++;
    var hits = 0;

    var g = newGlobal({newCompartment: true});
    g.eval("function debugMe() { var x = 'wrong-x'; eval(\"\"); debugger; }");
    g.capture = null;

    var dbg = Debugger(g);
    dbg.onDebuggerStatement = function (frame) {
        if (frame.callee !== null && frame.callee.name == 'debugMe')
            frame = frame.older;
        var env = frame.environment.find("x");
        assertEq(env.getVariable("x"), val)
        assertEq(env.setVariable("x", 'ok'), undefined);
        assertEq(env.getVariable("x"), 'ok');

        
        assertThrowsInstanceOf(function () { env.setVariable("newVar", 0); }, TypeError);
        hits++;
    };

    code = code.replace("@@", debugStmts);
    if (followupStmts !== undefined)
        code += " " + followupStmts;
    code = code.replace(/VAL/g, String(val));
    g.eval(code);
    assertEq(hits, 1);
}

for (var s of cases) {
    
    test(s, "eval(\"\"); debugger; assertEq(x, 'ok');");

    
    test(s, "debugMe(); assertEq(x, 'ok');");

    
    test(s, "{ let y = 'irrelevant'; (function (z) { { let zz = y; eval(\"\"); debugger; } })(); } assertEq(x, 'ok');"),

    
    
    test(s, "capture = {dbg: function () { eval(\"\"); debugger; }, get x() { return x; }};",
            "assertEq(capture.x, VAL); capture.dbg(); assertEq(capture.x, 'ok');");
}
