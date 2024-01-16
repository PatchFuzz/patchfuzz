


load(libdir + "asserts.js");

var g = newGlobal({newCompartment: true});
var dbg = new Debugger();
var gw = dbg.addDebuggee(g);




const push = gw.makeDebuggeeNativeFunction(Array.prototype.push);

gw.setProperty("push", push);
g.eval("var x = []; push.call(x, 2); x.push(3)");
assertEq(g.x[0], 2);
assertEq(g.x[1], 3);


assertThrowsInstanceOf(() => {
  gw.makeDebuggeeNativeFunction(() => {});
}, Error);


let f;
new Promise(resolve => { f = resolve; })
assertThrowsInstanceOf(() => gw.makeDebuggeeNativeFunction(f), Error);
