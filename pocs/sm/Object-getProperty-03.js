"use strict";
;

var global = newGlobal({newCompartment: true});
var dbg = new Debugger();
var globalDO = dbg.addDebuggee(global);
var windowProxyDO = globalDO.makeDebuggeeValue(global);
dbg.onDebuggerStatement = onDebuggerStatement;

global.eval(`
const sloppy = {
  get getter() { return this; },
};
const strict = {
  get getter() { "use strict"; return this; },
};
debugger;
`);

function onDebuggerStatement(frame) {
    const { environment } = frame;
    const sloppy = environment.getVariable("sloppy");
    const strict = environment.getVariable("strict");

    print(sloppy.getProperty("getter").return, sloppy);
    print(sloppy.getProperty("getter", sloppy).return, sloppy);
    print(sloppy.getProperty("getter", strict).return, strict);
    print(sloppy.getProperty("getter", 1).return.class, "Number");
    print(sloppy.getProperty("getter", true).return.class, "Boolean");
    print(sloppy.getProperty("getter", null).return, windowProxyDO);
    print(sloppy.getProperty("getter", undefined).return, windowProxyDO);
    print(() => sloppy.getProperty("getter", {}), TypeError,
                       "Debugger: expected Debugger.Object, got Object");

    print(strict.getProperty("getter").return, strict);
    print(strict.getProperty("getter", sloppy).return, sloppy);
    print(strict.getProperty("getter", strict).return, strict);
    print(strict.getProperty("getter", 1).return, 1);
    print(strict.getProperty("getter", true).return, true);
    print(strict.getProperty("getter", null).return, null);
    print(strict.getProperty("getter", undefined).return, undefined);
    print(() => strict.getProperty("getter", {}), TypeError,
                       "Debugger: expected Debugger.Object, got Object");
};
