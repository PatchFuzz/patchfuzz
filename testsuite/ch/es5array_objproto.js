





function test0(o, p) {
        o[p] = "set";
    }
    var p = 0;
    var o = [];
    var o2 = [];
    Object.prototype[p] = null;
    test0(o, p);
    WScript.Echo(o[p]);
    Object.defineProperty(Object.prototype, p, { configurable: true, enumerable: true, writable: false, value: null });
    test0(o2, p);
    WScript.Echo(o2[p]);

