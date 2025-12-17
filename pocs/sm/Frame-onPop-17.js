;

var g = newGlobal({newCompartment: true});
var dbg = new Debugger(g);


function test(badValue) {
    print("store " + JSON.stringify(badValue) + " in Debugger.Frame.prototype.onPop");

    var log;
    dbg.onDebuggerStatement = function handleDebugger(frame) {
        log += "d";
        print(function () { frame.onPop = badValue; }, TypeError);
    };

    log = "";
    g.eval("debugger");
    print(log, "d");
}

test(null);
test(false);
test(1);
test("stringy");
test(Symbol("symbolic"));
test({});
test([]);


print(function () { Debugger.Frame.prototype.onPop; }, TypeError);
print(
    function () { Debugger.Frame.prototype.onPop = function () {}; },
    TypeError);


var descriptor = Object.getOwnPropertyDescriptor(Debugger.Frame.prototype, 'onPop');
print(descriptor.configurable, true);
print(descriptor.enumerable, false);
print(function () { descriptor.get.call({}); }, TypeError);
print(function () { descriptor.set.call({}, function() {}); }, TypeError);
