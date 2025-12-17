g = newGlobal({newCompartment: true})
g.parent = this
g.eval("new Debugger(parent).onExceptionUnwind = function () {}")
enableGeckoProfiling()

try {
  
  enableSingleStepProfiling();
} catch (e) {
  quit();
}

function print(f) {
    try {
        f()
    } catch (exc) {}
}
function testThrow(thunk) {
    for (i = 0; i < 20; i++) {
        iter = thunk()
        print(function() { return iter.throw(); })
    }
}
testThrow(function*() {})
