






























try {
    function make_watcher(name) { }
    var o, p;
    function f(flag) {
        if (flag) {
            o = arguments;
        } else {
            p = arguments;
            o.watch(0, (arguments-1901)('o'));
            p.watch(0, make_watcher('p'));
            p.unwatch(0);
            o.unwatch(0);
            p[0] = 4;
            assertEq(flag, 4);
        }
    }
    f(true);
    f(false);
    reportCompare(true, true);
} catch(exc1) { }

try {
    function __noSuchMethod__() {
       if (anonymous == "1")
           return NaN;
       return __construct__;
    }
    f.p = function() { };
    Object.freeze(p);
    new new freeze().p;
    reportCompare(0, 0, "ok");
} catch(exc2) { }

gc();
