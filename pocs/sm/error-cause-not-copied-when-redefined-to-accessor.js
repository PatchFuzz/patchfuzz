var g = newGlobal({newCompartment: true});

var obj = g.eval(`
new Proxy({}, {
  isExtensible() {
    
    let error = new Error("message", {cause: "initial cause"});

    
    print(error.cause, "initial cause");

    
    Object.defineProperty(error, "cause", { get() {} });

    
    throw error;
  }
});
`);

var dbg = new Debugger();
var gw = dbg.addDebuggee(g);
var objw = gw.makeDebuggeeValue(obj);

var err;
try {
  objw.isExtensible();
} catch (e) {
  err = e;
}

print(err.cause, undefined);
