var g = newGlobal({newCompartment: true});
var dbg = new Debugger;
var gw = dbg.addDebuggee(g);

g.eval("function compareObjects() {\n" +
       "    print(Object.isExtensible(x), Object.isExtensible(y));\n" +
       "    var xnames = Object.getOwnPropertyNames(x).sort();\n" +
       "    var ynames = Object.getOwnPropertyNames(y).sort();\n" +
       "    print(xnames.length, ynames.length);\n" +
       "    for (var i = 0; i < xnames.length; i++) {\n" +
       "        print(xnames[i], ynames[i]);\n" +
       "        var name = xnames[i];\n" +
       "        var xd = Object.getOwnPropertyDescriptor(x, name);\n" +
       "        var yd = Object.getOwnPropertyDescriptor(y, name);\n" +
       "        print(xd.configurable, yd.configurable, code + '.' + name + ' .configurable');\n" +
       "        print(xd.enumerable, yd.enumerable, code + '.' + name + ' .enumerable');\n" +
       "        print(xd.writable, yd.writable, code + '.' + name + ' .writable');\n" +
       "    }\n" +
       "}\n");

function test(code) {
    g.code = code;
    g.eval("x = (" + code + ");");
    g.eval("y = (" + code + ");");
    var xw = gw.getOwnPropertyDescriptor("x").value;

    function check() {
        
        
        g.compareObjects();

        
        print(xw.isExtensible(), g.Object.isExtensible(g.x), code + ' isExtensible');
        print(xw.isSealed(), g.Object.isSealed(g.x), code + ' isSealed');
        print(xw.isFrozen(), g.Object.isFrozen(g.x), code + ' isFrozen');
    }

    check();

    xw.preventExtensions();
    print(g.Object.isExtensible(g.x), false, code + ' preventExtensions');
    g.Object.preventExtensions(g.y);
    check();

    xw.seal();
    print(g.Object.isSealed(g.x), true, code + ' seal');
    g.Object.seal(g.y);
    check();

    xw.freeze();
    print(g.Object.isFrozen(g.x), true, code + ' freeze');
    g.Object.freeze(g.y);
    check();
}

test("{}");
test("{a: [1], get b() { return -1; }}");
test("Object.create(null, {x: {value: 3}, y: {get: Math.min}})");
test("[]");
test("[,,,,,]");
test("[0, 1, 2]");
