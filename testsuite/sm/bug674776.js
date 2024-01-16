



var g = newGlobal({newCompartment: true});
var dbg = new g.Debugger(this);

var s = '';
for (var i = 0; i < 70000; i++) {
    s += 'function x' + i + '() { x' + i + '(); }\n';
}
s += 'pc2line(1);\n'
evaluate(s);
