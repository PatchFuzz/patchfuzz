ignoreUnhandledRejections();

let g = newGlobal({newCompartment: true});
let dbg = new Debugger();
let gw = dbg.addDebuggee(g);

g.eval(`
function throwValue(value) {
  throw value;
}

async function f() {
  throwValue("exception-value");
}

this.promise = f();
`);

let promise = gw.makeDebuggeeValue(g.f());

print(promise.isPromise, true);
print(promise.promiseState, "rejected");
if (promise.promiseResolutionSite !== null) {
  print(promise.promiseResolutionSite.toString().includes("throwValue"), true);
}
