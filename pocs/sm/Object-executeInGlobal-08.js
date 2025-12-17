var g = newGlobal({newCompartment: true});
var dbg = new Debugger(g);
var debuggee = dbg.getDebuggees()[0];
var count = 0;

function testLineNumber (options, expected) {
    count++;
    dbg.onNewScript = function(script){
        dbg.onNewScript = undefined;
        print(script.startLine, expected);
        count--;
    };
    debuggee.executeInGlobal("", options);
}


testLineNumber(undefined, 1);
testLineNumber({}, 1);
testLineNumber({ lineNumber: undefined }, 1);
testLineNumber({ lineNumber: 5 }, 5);
print(count, 0);
