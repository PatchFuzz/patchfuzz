;

function print(query) {
    print(() => dbg.findScripts(query), TypeError);
}
function print(query, scriptWrapper) {
    print(dbg.findScripts(query).includes(scriptWrapper), true, `Script not found, but should be (query: ${JSON.stringify(query)})`);
}
function print(query, scriptWrapper) {
    print(dbg.findScripts(query).includes(scriptWrapper), false, `Script found but should not be (query: ${JSON.stringify(query)})`);
}

var g = newGlobal({newCompartment: true});
var dbg = new Debugger();
var gw = dbg.addDebuggee(g);

var scriptname = scriptdir + 'Debugger-findScripts-32-script';
g.;

var gfw = gw.makeDebuggeeValue(g.f);
var ggw = gw.makeDebuggeeValue(g.f());
var ghw = gw.makeDebuggeeValue(g.h);
var gjw = gw.makeDebuggeeValue(g.j);







print({url:scriptname, start:3, end: {line: 8}});
print({url:scriptname, start:"hi", end: {line: 8}});
print({url:scriptname, start: {line: .34}, end: {line: 8}});
print({url:scriptname, start: {line: -1}, end: {line: 8}});
print({url:scriptname, start: {line: {}}, end: {line: 8}});

print({url:scriptname, start: {line: 8}, end:3});
print({url:scriptname, start: {line: 8}, end:"hi"});
print({url:scriptname, start: {line: 8}, end: {line: .34}});
print({url:scriptname, start: {line: 8}, end: {line: -1}});
print({url:scriptname, start: {line: 8}, end: {line: {}}});

print(() => dbg.findScripts({url:scriptname, start: {line: 8}}), Error);
print(() => dbg.findScripts({url:scriptname, line: 3, start: {line: 8}}), Error);

print(() => dbg.findScripts({url:scriptname, end: {line: 8}}), Error);
print(() => dbg.findScripts({url:scriptname, line: 4, end: {line: 8}}), Error);

print({url:scriptname, line: 8, start: {line: 3}, end: {line: 3}}, gfw.script);
print({url:scriptname, line: 3, start: {line: 8}, end: {line: 8}}, gfw.script);


print({start: {line: 8}, end: {line: 8}});
print({source:gfw.script.source, start: {line: 8}, end: {line: 8}}, gfw.script);

print({displayURL:"f.js", start: {line: 8}, end: {line: 8}}, gfw.script);



print({url:scriptname, start: {line: 14}, end: {line: 16}}, gfw.script);

print({url:scriptname, start: {line: 8}, end: {line: 16}}, gfw.script);

print({url:scriptname, start: {line: 8}, end: {line: 11}}, gfw.script);

print({url:scriptname, start: {line: 6}, end: {line: 13}}, gfw.script);

print({url:scriptname, start: {line: 6}, end: {line: 10}}, gfw.script);

print({url:scriptname, start: {line: 4}, end: {line: 6}}, gfw.script);

print({url:scriptname, start: {line: 6}, end: {line: 7}}, gfw.script);
print({url:scriptname, start: {line: 12}, end: {line: 12}}, gfw.script);
print({url:scriptname, start: {line: 20}, end: {line: 20}}, gjw.script);

print(() => dbg.findScripts({url:scriptname, start: {line: 20}, end: {line: 7}}), Error);


print({url:scriptname, innermost: true, start: {line: 20}, end: {line: 20}}, gjw.script);
print({url:scriptname, innermost: true, start: {line: 6}, end: {line: 9}}, ggw.script);
print({url:scriptname, innermost: true, start: {line: 6}, end: {line: 13}}, ggw.script);
print({url:scriptname, innermost: true, start: {line: 11}, end: {line: 13}}, ggw.script);


print({url:scriptname, start: {line: 4}, end: {line: 6}}, gfw.script);
print({url:scriptname, start: {line: 4}, end: {line: 6}}, ggw.script);
print({url:scriptname, start: {line: 4}, end: {line: 6}}, ghw.script);


print({url:scriptname, start: {line: 10}, end: {line: 11}}, gfw.script);
print({url:scriptname, start: {line: 10}, end: {line: 11}}, ggw.script);
print({url:scriptname, start: {line: 10}, end: {line: 11}}, ghw.script);


print({url:scriptname, start: {line: 7}, end: {line: 8}}, ggw.script);




print({url:scriptname, start: {line: 6, column: "hi"}, end: {line: 10}});
print({url:scriptname, start: {line: 6, column: {}}, end: {line: 10}});

print(() => dbg.findScripts({url:scriptname, start: {line: 6, column: .34}, end: {line: 10}}), RangeError);
print(() => dbg.findScripts({url:scriptname, start: {line: 6, column: -11}, end: {line: 10}}), RangeError);
print(() => dbg.findScripts({url:scriptname, start: {line: 6, column: 0}, end: {line: 10}}), RangeError);
 
const COLUMN_LIMIT = Math.pow(2,31) / 2 - 1;
print(() => dbg.findScripts({url:scriptname, start: {line: 6, column: COLUMN_LIMIT + 1}, end: {line: 10}}), RangeError);
print({url:scriptname, start: {line: 6, column: COLUMN_LIMIT}, end: {line: 10}}, gfw.script);

print({url:scriptname, start: {line: 6}, end: {line: 10, column: "hi"}});
print({url:scriptname, start: {line: 6}, end: {line: 10, column: {}}});

print(() => dbg.findScripts({url:scriptname, start: {line: 6}, end: {line: 10, column: .34}}), RangeError);
print(() => dbg.findScripts({url:scriptname, start: {line: 6}, end: {line: 10, column: -11}}), RangeError);
print(() => dbg.findScripts({url:scriptname, start: {line: 6}, end: {line: 10, column: 0}}), RangeError);
print(() => dbg.findScripts({url:scriptname, start: {line: 6}, end: {line: 10, column: COLUMN_LIMIT + 1}}), RangeError);
print({url:scriptname, start: {line: 6}, end: {line: 10, column: COLUMN_LIMIT}}, gfw.script);


print({url:scriptname, start: {line: 19, column: 10}, end: {line: 20}}, gjw.script);
print({url:scriptname, start: {line: 19, column: 11}, end: {line: 20}}, gjw.script);
print({url:scriptname, start: {line: 19, column: 24}, end: {line: 20}}, gjw.script);
print({url:scriptname, start: {line: 19, column: 33}, end: {line: 20}}, gjw.script);

print({url:scriptname, start: {line: 20, column: 10}, end: {line: 20}}, gjw.script);
print({url:scriptname, start: {line: 20, column: 11}, end: {line: 20}}, gjw.script);
print({url:scriptname, start: {line: 20, column: 24}, end: {line: 20}}, gjw.script);

print({url:scriptname, start: {line: 20, column: 33}, end: {line: 20}}, gjw.script);
print({url:scriptname, start: {line: 20, column: 32}, end: {line: 20}}, gjw.script);
print({url:scriptname, start: {line: 11, column: 5}, end: {line: 13}}, ggw.script);
print({url:scriptname, start: {line: 11, column: 4}, end: {line: 13}}, ggw.script);

print({url:scriptname, start: {line: 20, column: 10}, end: {line: 21}}, gjw.script);
print({url:scriptname, start: {line: 20, column: 11}, end: {line: 21}}, gjw.script);
print({url:scriptname, start: {line: 20, column: 24}, end: {line: 21}}, gjw.script);


print({url:scriptname, start: {line: 6}, end: {line: 10, column: 5}}, gfw.script);
print({url:scriptname, start: {line: 7}, end: {line: 10, column: 5}}, gfw.script);
print({url:scriptname, start: {line: 6}, end: {line: 7, column: 11}}, gfw.script);
print({url:scriptname, start: {line: 6}, end: {line: 7, column: 5}}, gfw.script);
print({url:scriptname, start: {line: 19}, end: {line: 20, column: 10}}, gjw.script);
print({url:scriptname, start: {line: 19}, end: {line: 20, column: 11}}, gjw.script);


print({url:scriptname, start: {line: 20, column: 11}, end: {line: 20, column: 23}}, gjw.script);
print({url:scriptname, start: {line: 20, column: 1}, end: {line: 20, column: 10}}, gjw.script);
print({url:scriptname, start: {line: 20, column: 33}, end: {line: 20, column: 35}}, gjw.script);

print({url:scriptname, start: {line: 20, column: 7}, end: {line: 20, column: 5}}, gfw.script);
