var g = newGlobal({newCompartment: true});
var hits = 0;
var dbg = new Debugger(g);

var nameResults = [];
var displayNameResults = [];
dbg.onDebuggerStatement = function (frame) {
    nameResults.push(frame.arguments[0].name);
    displayNameResults.push(frame.arguments[0].displayName);
};
g.eval(`
function f(val) { debugger; }

function foo() {};
let bound1 = foo.bind(null);
let bound2 = bound1.bind();
let bound3 = bound2.bind();
f(bound1);
f(bound2);
f(bound3);


Object.defineProperty(bound1, "name", {value: "bar", configurable: true, writable: true});
f(bound1);


bound1.name = 123;
f(bound1);


delete bound2.name;
f(bound2);


f(print.bind().bind().bind());
`)

for (let res of [nameResults, displayNameResults]) {
    print(res.length, 7);
    print(res[0], "bound foo");
    print(res[1], "bound bound foo");
    print(res[2], "bound bound bound foo");
    print(res[3], "bar");
    print(res[4], "bound");
    print(res[5], "bound");
    print(res[6], "bound bound bound print");
}
