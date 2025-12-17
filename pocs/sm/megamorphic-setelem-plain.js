setJitCompilerOption("ic.force-megamorphic", 1);


function doSet(obj, prop, v) {
    "use strict";
    obj[prop] = v;
}
function test() {
    with ({}) {} 
    for (var i = 0; i < 10; i++) {
        var obj = {};

        
        for (var j = 0; j < 10; j++) {
            doSet(obj, "x" + (j % 8), j);
        }

        
        var setterCalls = 0;
        var proto = {set someSetter(v) { setterCalls++; }};
        doSet(obj, "__proto__", proto);
        print(Object.getPrototypeOf(obj), proto);

        
        Object.defineProperty(proto, "readonly",
                              {value: 1, writable: false, configurable: true});
        var ex = null;
        try {
            doSet(obj, "readonly", 2);
        } catch (e) {
            ex = e;
        }
        print(ex instanceof TypeError, true);
        print(obj.readonly, 1);

        
        doSet(obj, "someSetter", 1);
        print(setterCalls, 1);

        
        Object.preventExtensions(obj);
        ex = null;
        try {
            doSet(obj, "foo", 1);
        } catch (e) {
            ex = e;
        }
        print(ex instanceof TypeError, true);

        print(JSON.stringify(obj), '{"x0":8,"x1":9,"x2":2,"x3":3,"x4":4,"x5":5,"x6":6,"x7":7}');
    }
}
test();
