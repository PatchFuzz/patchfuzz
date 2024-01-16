

var N = 4;
var g = newGlobal({newCompartment: true});
g.eval("function add(a) { return function (b) { return eval('a + b'); }; }");
var dbg = new Debugger;
var gw = dbg.addDebuggee(g);
var aw = gw.getOwnPropertyDescriptor("add").value;


var arr = [];
for (var i = 0; i < N; i++)
    arr[i] = aw.call(null, i).return.environment;


function check() {
    for (var i = 0; i < N; i++) {
        assertEq(arr[i].find("b"), null);
        assertEq(arr[i].find("a"), arr[i]);
    }
}
check();


gc();
gc({});
g.gc(g);
check();
