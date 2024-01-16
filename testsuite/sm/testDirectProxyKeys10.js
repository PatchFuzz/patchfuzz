load(libdir + "asserts.js");





var target = {};
var handler = {
    getOwnPropertyDescriptor : function (target, P) {
        var targetDesc = Object.getOwnPropertyDescriptor(target, P);
        
        targetDesc.enumerable = !targetDesc.enumerable;
        return targetDesc;
    }
};

for (let p of [new Proxy(target, handler), Proxy.revocable(target, handler).proxy]) {
    Object.defineProperty(target, "foo", { configurable: true, enumerable: false });
    assertDeepEq(Object.keys(p), ["foo"]);

    Object.defineProperty(target, "foo", {configurable: true, enumerable: true});
    assertDeepEq(Object.keys(p), []);
}
