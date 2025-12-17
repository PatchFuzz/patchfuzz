var g = newGlobal({newCompartment: true});
var dbg = new Debugger(g);

let e;
dbg.uncaughtExceptionHook = ee => { e = ee; };
dbg.onNewPromise = () => { throw new Error("woops!"); };

print(typeof new g.Promise(function (){}), "object");
print(!!e, true);
print(!!e.message.match(/woops/), true);
