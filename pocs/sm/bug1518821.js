;

var g = newGlobal({newCompartment: true});
var f = g.Function("fn", "fn()");
f(function() {
    nukeAllCCWs();
    print(() => { arguments.callee.caller = null; }, TypeError,
                       "can't access dead object");
    print(() => arguments.callee.caller, TypeError,
                       "can't access dead object");
});
