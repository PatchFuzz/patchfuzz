load(libdir + "asserts.js");

var g = newGlobal({newCompartment: true});
var dbg = Debugger(g);

g.eval(`
function* f() {
    e;
}
`);



var currentFrame;
var uncaughtException;
dbg.uncaughtExceptionHook = function(e) {
    uncaughtException = e;
    return {
        return: "uncaught"
    };
};
function testUncaughtException() {
    uncaughtException = undefined;
    var obj = g.eval(`f().next()`);
    assertEq(obj.done, true);
    assertEq(obj.value, 'uncaught');
    assertEq(uncaughtException instanceof TypeError, true);
}


dbg.onExceptionUnwind = function(frame) {
    return undefined;
};
assertThrowsInstanceOf(() => g.eval(`f().next();`), g.ReferenceError);


dbg.onExceptionUnwind = function(frame) {
    currentFrame = frame;
    return {
        return: "foo"
    };
};
var obj = g.eval(`f().next()`);
assertEq(obj.done, true);
assertEq(obj.value, "foo");


dbg.onExceptionUnwind = function(frame) {
    currentFrame = frame;
    return {declaim: "gadzooks"};
};
testUncaughtException();
