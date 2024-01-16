
load(libdir + "asserts.js");

var g = newGlobal({newCompartment: true});
var dbg = new Debugger(g);


function test(badValue) {
    print("store " + JSON.stringify(badValue) + " in Debugger.Frame.prototype.onPop");

    var log;
    dbg.onDebuggerStatement = function handleDebugger(frame) {
        log += "d";
        assertThrowsInstanceOf(function () { frame.onPop = badValue; }, TypeError);
    };

    log = "";
    g.eval("debugger");
    assertEq(log, "d");
}

test(null);
test(false);
test(1);
test("stringy");
test(Symbol("symbolic"));
test({});
test([]);


assertThrowsInstanceOf(function () { Debugger.Frame.prototype.onPop; }, TypeError);
assertThrowsInstanceOf(
    function () { Debugger.Frame.prototype.onPop = function () {}; },
    TypeError);


var descriptor = Object.getOwnPropertyDescriptor(Debugger.Frame.prototype, 'onPop');
assertEq(descriptor.configurable, true);
assertEq(descriptor.enumerable, false);
assertThrowsInstanceOf(function () { descriptor.get.call({}); }, TypeError);
assertThrowsInstanceOf(function () { descriptor.set.call({}, function() {}); }, TypeError);
