













var p = new Proxy(Function(), { get: function closure() { eval("o.p.y"); delete closure; return closure == arguments.callee && !(new String(undefined)); }});

try {
  Function.prototype.bind.call(p);
  assert(false);
} catch (e) {
  assert(e instanceof ReferenceError);
}
