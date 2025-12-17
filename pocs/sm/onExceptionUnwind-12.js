var g = newGlobal({newCompartment: true});
g.parent = this;
g.hits = 0;
g.eval("new Debugger(parent).onExceptionUnwind = function () { hits++; };");
function f() {
    var x = f();
}
try {
  f();
} catch (e) {
  print(e instanceof InternalError, true);
} finally {
  print(g.hits, 0);
}
