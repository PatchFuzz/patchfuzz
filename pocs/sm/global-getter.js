function test(useWindowProxy) {
    var g = newGlobal({useWindowProxy});
    g.useWindowProxy = useWindowProxy;
    g.evaluate(`
        var x = 123;
        Object.defineProperty(this, "getX", {get: function() { return this.x; }});
        Object.defineProperty(Object.prototype, "protoGetX", {get: function() { return this.x * 2; }});
        Object.defineProperty(this, "thisIsProxy", {get: function() { return isProxy(this); }});

        function f() {
            for (var i = 0; i < 100; i++) {
                
                print(getX, 123);
                print(protoGetX, 246);
                print(thisIsProxy, useWindowProxy);
                
                print(globalThis.getX, 123);
                print(globalThis.protoGetX, 246);
                print(globalThis.thisIsProxy, useWindowProxy);
            }
        }
        f();
    `);
}

for (let useWindowProxy of [true, false]) {
    test(useWindowProxy);
}

setJitCompilerOption("ic.force-megamorphic", 1);

for (let useWindowProxy of [true, false]) {
    test(useWindowProxy);
}
