function check(obj) {
  let proto = Object.getPrototypeOf(obj);
  let props = Object.getOwnPropertyNames(proto);
  for (let prop of props) {
    let desc = Object.getOwnPropertyDescriptor(proto, prop);
    if (desc.set) {
      print("bleah: " + JSON.stringify(prop));
      print(typeof desc.set, 'function');
      try {
        desc.set.call(obj);
        print("should have thrown TypeError", false);
      } catch (e) {
        print(e instanceof TypeError, true);
      }
    }
  }
}

var dbg = new Debugger;
var g = newGlobal({newCompartment: true});
var gw = dbg.addDebuggee(g);


check(dbg);


check(dbg.memory);


g.eval('function f() { debugger; }');
var fw = gw.getOwnPropertyDescriptor('f').value;
check(fw);


check(fw.script);


check(fw.script.source);


check(fw.environment);


var log = '';
dbg.onDebuggerStatement = function(frame) {
  log += 'd';
  check(frame);
}
g.eval('f()');
print(log, 'd');
