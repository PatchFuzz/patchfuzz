var g = newGlobal({newCompartment: true});
var dbg = Debugger(g);
var hits;
var expected;
dbg.onDebuggerStatement = function (frame) {
    var args = frame.arguments;
    var obj = args[0], id = args[1];
    var desc = obj.getOwnPropertyDescriptor(id);
    if (expected === undefined) {
        print(desc, undefined);
    } else {
        print(desc instanceof Object, true);
        print(desc.enumerable, expected.enumerable);
        print(desc.configurable, expected.configurable);
        print(desc.hasOwnProperty("value"), true);
        print(desc.value, expected.value);
        print(desc.writable, expected.writable === undefined ? true : expected.writable);
        print("get" in desc, false);
        print("set" in desc, false);
    }
    hits++;
};

g.eval("function f(obj, id) { debugger; }");

function test(obj, id, desc) {
    expected = desc;
    hits = 0;
    g.f(obj, id);
    print(hits, 1);
}

var obj = g.eval("({a: 1, ' ': undefined, '0': 0})");
test(obj, "a", {value: 1, enumerable: true, configurable: true});
test(obj, " ", {value: undefined, enumerable: true, configurable: true});
test(obj, "b", undefined);
test(obj, "0", {value: 0, enumerable: true, configurable: true});
test(obj, 0, {value: 0, enumerable: true, configurable: true});

var arr = g.eval("[7,,]");
test(arr, 'length', {value: 2, enumerable: false, configurable: false});
test(arr, 0, {value: 7, enumerable: true, configurable: true});
test(arr, "0", {value: 7, enumerable: true, configurable: true});
test(arr, 1, undefined);
test(arr, "1", undefined);
test(arr, 2, undefined);
test(arr, "2", undefined);
test(arr, "argelfraster", undefined);

var re = g.eval("/erwe/");
test(re, 'lastIndex', {value: 0, enumerable: false, configurable: false});


var str = g.eval("new String('hello world')");
test(str, 'length', {value: 11, enumerable: false, configurable: false, writable: false});
test(str, 0, {value: 'h', enumerable: true, configurable: false, writable: false});
test(str, "0", {value: 'h', enumerable: true, configurable: false, writable: false});
