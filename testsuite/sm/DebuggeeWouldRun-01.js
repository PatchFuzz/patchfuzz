

g = newGlobal();
var dbg = Debugger(g)
dbg.onNewPromise = () => g.makeFakePromise();
g.makeFakePromise();

