;

var g = newGlobal({newCompartment: true});
var dbg = new Debugger;
var gw = dbg.addDebuggee(g);

for (let v of [null, false, 'bad', 0, 2.76, {}]) {
    print(function () {
        gw.defineProperty("p", {configurable: true, get: v});
    }, TypeError);
    print(function () {
        gw.defineProperty("p", {configurable: true, set: v});
    }, TypeError);
}
