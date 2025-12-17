;

var dbg = new Debugger;
var d = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(dbg), 'findAllGlobals');
print(d.configurable, true);
print(d.enumerable, false);
print(d.writable, true);
print(typeof d.value, 'function');
print(dbg.findAllGlobals.length, 0);
print(dbg.findAllGlobals.name, 'findAllGlobals');


print(function() {
                         Debugger.prototype.findAllGlobals.call(Debugger.prototype);
                       },
                       TypeError);
var a = dbg.findAllGlobals();
print(a instanceof Array, true);
print(a.length > 0, true);
for (g of a) {
  print(g instanceof Debugger.Object, true);
}
