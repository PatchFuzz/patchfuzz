var g = newGlobal({newCompartment: true});
var dbg = new Debugger(g);

g.eval("" + function f() {
  throw 42;
});

g.eval("" + function g() {
  throw new Error("42");
});


g.eval("try { f(); } catch (e) { }");
g.eval("try { g(); } catch (e) { }");






dbg.onExceptionUnwind = function f() { };
g.eval("try { f(); } catch (e) { }");
g.eval("try { g(); } catch (e) { }");
