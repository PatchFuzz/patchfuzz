"use strict";

var global = newGlobal({newCompartment: true});
var dbg = new Debugger(global);
dbg.onDebuggerStatement = onDebuggerStatement;

let obj;
global.eval(`
const obj = {
    get prop() {
        debugger;
        return 42;
    }
};

debugger;
`);


function onDebuggerStatement(frame) {
    dbg.onDebuggerStatement = onDebuggerStatementGetter;

    obj = frame.environment.getVariable("obj");
}

let debuggerRan = false;

print(obj.getProperty("prop").return, 42);
print(debuggerRan, true);

function onDebuggerStatementGetter(frame) {
    debuggerRan = true;
}
