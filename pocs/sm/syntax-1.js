;

function print(code) {
    print(function () { Function(code); }, SyntaxError, "Function:" + code);
    print(function () { eval(code); }, SyntaxError, "eval:" + code);
    var ieval = eval;
    print(function () { ieval(code); }, SyntaxError, "indirect eval:" + code);
}

function test(badForHead) {
    print(badForHead + " {}");  
    print("[0 " + badForHead + "];");
}

var a, b, c;
test("for (a in b of c)");
test("for (a of b of c)");
test("for (let {a: 1} of b)");
