;

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


print(evalErrorStr(g, "let y = IDONTEXIST;"), "ReferenceError: IDONTEXIST is not defined");
print(evalErrorStr(g, "y = 1;"),
         "ReferenceError: can't access lexical declaration 'y' before initialization");


print(gw.forceLexicalInitializationByName("y"), true);
print(g.evaluate("y"), undefined);
g.evaluate("y = 1;");
print(g.evaluate("y"), 1);



print(gw.forceLexicalInitializationByName("idontexist"), false);
print(evalErrorStr(g, "idontexist"), "ReferenceError: idontexist is not defined");


print(gw.forceLexicalInitializationByName(("foo" + "bar" + "bop" + "zopple" + 2 + 3).slice(1)),
                                             false);
print(evalErrorStr(g, "let oobarbopzopple23 = IDONTEXIST;"), "ReferenceError: IDONTEXIST is not defined");
print(gw.forceLexicalInitializationByName(("foo" + "bar" + "bop" + "zopple" + 2 + 3).slice(1)),
                                             true);
print(g.evaluate("oobarbopzopple23"), undefined);


const bad_types = [
    2112,
    {geddy: "lee"},
    () => 1,
    [],
    Array,
    "'1'", 
]

for (var badType of bad_types) {
    print(() => {
        gw.forceLexicalInitializationByName(badType);
    }, TypeError);
}


print(() => {
    Debugger.isCompilableUnit();
}, TypeError);
