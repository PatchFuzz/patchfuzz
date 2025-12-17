"use strict";
;

var global = newGlobal({newCompartment: true});
var dbg = new Debugger();
var globalDO = dbg.addDebuggee(global);
var windowProxyDO = globalDO.makeDebuggeeValue(global);
dbg.onDebuggerStatement = onDebuggerStatement;

global.eval(`
let receiver;
function check(value, thisVal) {
  receiver = thisVal;
  if (value !== "value") throw "Unexpected value";
}
const sloppy = {
  set setter(value) { check(value, this); },
};
const strict = {
  set setter(value) { "use strict"; check(value, this); },
};
debugger;
`);

function onDebuggerStatement(frame) {
    const { environment } = frame;
    const sloppy = environment.getVariable("sloppy");
    const strict = environment.getVariable("strict");
    const receiver = () => environment.getVariable("receiver");
    const value = "value";

    print(sloppy.setProperty("setter", value).return, true);
    print(receiver(), sloppy);
    print(sloppy.setProperty("setter", value, sloppy).return, true);
    print(receiver(), sloppy);
    print(sloppy.setProperty("setter", value, strict).return, true);
    print(receiver(), strict);
    print(sloppy.setProperty("setter", value, 1).return, true);
    print(receiver().class, "Number");
    print(sloppy.setProperty("setter", value, true).return, true);
    print(receiver().class, "Boolean");
    print(sloppy.setProperty("setter", value, null).return, true);
    print(receiver(), windowProxyDO);
    print(sloppy.setProperty("setter", value, undefined).return, true);
    print(receiver(), windowProxyDO);
    print(() => sloppy.setProperty("setter", value, {}), TypeError,
                       "Debugger: expected Debugger.Object, got Object");

    print(strict.setProperty("setter", value).return, true);
    print(receiver(), strict);
    print(strict.setProperty("setter", value, sloppy).return, true);
    print(receiver(), sloppy);
    print(strict.setProperty("setter", value, strict).return, true);
    print(receiver(), strict);
    print(strict.setProperty("setter", value, 1).return, true);
    print(receiver(), 1);
    print(strict.setProperty("setter", value, true).return, true);
    print(receiver(), true);
    print(strict.setProperty("setter", value, null).return, true);
    print(receiver(), null);
    print(strict.setProperty("setter", value, undefined).return, true);
    print(receiver(), undefined);
    print(() => strict.setProperty("setter", value, {}), TypeError,
                       "Debugger: expected Debugger.Object, got Object");
};
