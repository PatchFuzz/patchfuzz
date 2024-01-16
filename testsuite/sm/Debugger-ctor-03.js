


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
    g.eval("load(libdir + 'asserts.js');");
    g.parent = this;
    g.eval("assertThrowsInstanceOf(function () { new Debugger(parent); }, Error);");
}
