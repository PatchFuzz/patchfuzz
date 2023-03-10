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

const LINEAR_SEARCHES_MAX = 3;
const SHAPE_CACHE_MIN_ENTRIES = 3;


for (i in [...Array(SHAPE_CACHE_MIN_ENTRIES)])
    gw.executeInGlobal(`let x${i} = 1`);



for (i in [...Array(LINEAR_SEARCHES_MAX - 1)])
    gw.executeInGlobal("y");




print(gw.forceLexicalInitializationByName("y"), true);
