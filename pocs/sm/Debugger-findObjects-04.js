var g = newGlobal({newCompartment: true});
var dbg = new Debugger();
var gw = dbg.addDebuggee(g);

g.eval(`
  this.f = (function () {
    let a = { foo: () => {} };
    return () => a;
  }());
`);

let objects = dbg.findObjects();
let aw = gw.makeDebuggeeValue(g.f());
print(objects.indexOf(aw) != -1, true);
