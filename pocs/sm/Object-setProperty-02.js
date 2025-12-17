"use strict";

var global = newGlobal({newCompartment: true});
var dbg = new Debugger(global);
dbg.onDebuggerStatement = onDebuggerStatement;

let obj;
global.eval(`
const obj = {
    set prop(val) {
        debugger;
        this._prop = val;
    }
};

debugger;
`);


function onDebuggerStatement(frame) {
    dbg.onDebuggerStatement = onDebuggerStatementGetter;

    obj = frame.environment.getVariable("obj");
}

let debuggerRan = false;

print(obj.setProperty("prop", 42).return, true);
print(obj.getProperty("_prop").return, 42);
print(debuggerRan, true);

function onDebuggerStatementGetter(frame) {
    debuggerRan = true;
}
