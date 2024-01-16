

let g = newGlobal({newCompartment: true});
let dbg = new Debugger;
let gw = dbg.addDebuggee(g);

function getSourceMapURL() {
    let fw = gw.makeDebuggeeValue(g.f);
    return fw.script.source.sourceMapURL;
}

function setSourceMapURL(url) {
    let fw = gw.makeDebuggeeValue(g.f);
    fw.script.source.sourceMapURL = url;
}


g.evaluate("function f(x) { return 2*x; }");
assertEq(getSourceMapURL(), null);


g.evaluate("function f(x) { return 2*x; }", {sourceMapURL: 'file:/
assertEq(getSourceMapURL(), 'file:/


let fired = false;
dbg.onDebuggerStatement = function (frame) {
    fired = true;
    assertEq(frame.script.source.sourceMapURL, 'file:/
};
g.evaluate('(function () { (function () { debugger; })(); })();',
           {sourceMapURL: 'file:/
assertEq(fired, true);


g.evaluate('function f() {}\n' +
           '
assertEq(getSourceMapURL(), 'file:/

g.evaluate('function f() {}\n' +
           '');
assertEq(getSourceMapURL(), 'file:/

g.evaluate('function f() {}\n' +
           '');
assertEq(getSourceMapURL(), 'file:/



g.evaluate('function f() {}\n' +
           '
assertEq(getSourceMapURL(), 'http://example.com/has');



g.evaluate('function f() {}\n' +
           '
           'function z() {}');
assertEq(getSourceMapURL(), null);
assertEq('z' in g, true);



g.evaluate('function f() {}\n' +
           '
           '
assertEq(getSourceMapURL(), 'http://example.com/bar.js.map');


g.evaluate('function f() {}\n' +
           '
           {sourceMapURL: 'http://example.com/bar.js.map'});
assertEq(getSourceMapURL(), 'http://example.com/foo.js.map');


setSourceMapURL('baz.js.map');
assertEq(getSourceMapURL(), 'baz.js.map');

setSourceMapURL('');
assertEq(getSourceMapURL(), 'baz.js.map');
