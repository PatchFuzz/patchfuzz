var canEnable = true;
if (typeof setDebugMode === 'function') {
    try {
        setDebugMode(true);
    } catch (exc) {
        canEnable = false;
    }
}

if (!canEnable) {
    var g = newGlobal();
    g.libdir = libdir;
    g.eval(";
    g.parent = this;
    g.eval("print(function () { new Debugger(parent); }, Error);");
}
