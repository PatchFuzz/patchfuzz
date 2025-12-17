var g = newGlobal({newCompartment: true});
g.eval("var v;");
this.eval("var v;");

var dbg = Debugger();
var obj = dbg.addDebuggee(g);

function test(name) {
    var desc = obj.getOwnPropertyDescriptor(name);
    print(desc instanceof Object, true);
    var expected = Object.getOwnPropertyDescriptor(this, name);
    print(Object.prototype.toString.call(desc), Object.prototype.toString.call(expected));
    print(desc.enumerable, expected.enumerable);
    print(desc.configurable, expected.configurable);
    print(desc.writable, expected.writable);
    print(desc.value, expected.value);
}

test("Infinity");
test("v");
