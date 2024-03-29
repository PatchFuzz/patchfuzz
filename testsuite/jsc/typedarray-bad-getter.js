



(function body() {
    function foo(a) {
        return a.length + a.byteLength + a.byteOffset;
    }
    noInline(foo);

    let proto = { }

    let properties = ["length", "byteLength", "byteOffset"];
    properties.map(function(name) {
        let getter = Int32Array.prototype.__lookupGetter__(name);
        Object.defineProperty(proto, name, { get : getter });
    });

    function Bar() {
        return this;
    }

    Bar.prototype = proto;
    let bar = new Bar();

    let noThrow = false;
    for (let i = 0; i < 100000; i++) {
        try {
            foo(bar);
            noThrow = true
        } catch (e) {
        }
        if (noThrow)
            throw "broken";
    }
})();
