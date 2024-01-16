load(libdir + "asserts.js");

var g = newGlobal({newCompartment: true});
var dbg = new Debugger;
var gw = dbg.addDebuggee(g);

let errorOne, errorTwo;

function evalErrorStr(global, evalString) {
    try {
        global.evaluate(evalString);
        return undefined;
    } catch (e) {
        return e.toString();
    }
}


assertEq(evalErrorStr(g, "let y = IDONTEXIST;"), "ReferenceError: IDONTEXIST is not defined");
assertEq(evalErrorStr(g, "y = 1;"),
         "ReferenceError: can't access lexical declaration 'y' before initialization");


assertEq(gw.forceLexicalInitializationByName("y"), true);
assertEq(g.evaluate("y"), undefined);
g.evaluate("y = 1;");
assertEq(g.evaluate("y"), 1);



assertEq(gw.forceLexicalInitializationByName("idontexist"), false);
assertEq(evalErrorStr(g, "idontexist"), "ReferenceError: idontexist is not defined");


assertEq(gw.forceLexicalInitializationByName(("foo" + "bar" + "bop" + "zopple" + 2 + 3).slice(1)),
                                             false);
assertEq(evalErrorStr(g, "let oobarbopzopple23 = IDONTEXIST;"), "ReferenceError: IDONTEXIST is not defined");
assertEq(gw.forceLexicalInitializationByName(("foo" + "bar" + "bop" + "zopple" + 2 + 3).slice(1)),
                                             true);
assertEq(g.evaluate("oobarbopzopple23"), undefined);


const bad_types = [
    2112,
    {geddy: "lee"},
    () => 1,
    [],
    Array,
    "'1'", 
]

for (var badType of bad_types) {
    assertThrowsInstanceOf(() => {
        gw.forceLexicalInitializationByName(badType);
    }, TypeError);
}


assertThrowsInstanceOf(() => {
    Debugger.isCompilableUnit();
}, TypeError);
