var o = {};
var global = this;
var p = new Proxy(o, {
  "deleteProperty": function (target, key) {
    var g = newGlobal({newCompartment: true});
    g.parent = global;
    g.eval("var dbg = new Debugger(parent); dbg.onEnterFrame = function(frame) {};");
    return true;
  }
});
function test() {
  for (var i=0; i<100; i++) {}
  print(delete p.foo, true);
}
test();
