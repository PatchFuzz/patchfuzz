;

print(function () {
    var dbg = new Debugger();
    dbg.addDebuggee(Debugger.Object.prototype);
}, TypeError);
