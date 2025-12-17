g = newGlobal({newCompartment: true});
g.parent = this;
g.eval("(" + function() {
    Debugger(parent).onExceptionUnwind = function(frame) {
    frame.eval("")
    } } + ")()");

function ERROR(msg) {
    throw new Error("boom");
}
var dbg = new Debugger;
dbg.onNewGlobalObject = ERROR;
oomTest(function() {
    newGlobal({sameZoneAs: this});
})

