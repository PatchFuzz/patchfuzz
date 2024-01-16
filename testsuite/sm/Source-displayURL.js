


let g = newGlobal({newCompartment: true});
let dbg = new Debugger;
let gw = dbg.addDebuggee(g);

function getDisplayURL() {
    let fw = gw.makeDebuggeeValue(g.f);
    return fw.script.source.displayURL;
}


g.evaluate("function f(x) { return 2*x; }");
assertEq(getDisplayURL(), null);


g.evaluate("function f(x) { return 2*x; }", {displayURL: 'file:/
assertEq(getDisplayURL(), 'file:/


let fired = false;
dbg.onDebuggerStatement = function (frame) {
    fired = true;
    assertEq(frame.script.source.displayURL, 'file:/
};
g.evaluate('(function () { (function () { debugger; })(); })();',
           {displayURL: 'file:/
assertEq(fired, true);


g.evaluate('function f() {}\n' +
           '
assertEq(getDisplayURL(), 'file:/

g.evaluate('function f() {}\n' +
           '');
assertEq(getDisplayURL(), 'file:/

g.evaluate('function f() {}\n' +
           '');
assertEq(getDisplayURL(), 'file:/



g.evaluate('function f() {}\n' +
           '
assertEq(getDisplayURL(), 'http://example.com/has');



g.evaluate('function f() {}\n' +
           '
           'function z() {}');
assertEq(getDisplayURL(), null);
assertEq('z' in g, true);


g.evaluate('function f() {}\n' +
           '
           '
assertEq(getDisplayURL(), 'http://example.com/bar.js');


g.evaluate('function f() {}\n' +
           '
           {displayURL: 'http://example.com/bar.js'});
assertEq(getDisplayURL(), 'http://example.com/foo.js');




var capturedScript;
var capturedDisplayURL;
var capturedSourceMapURL;
dbg.onNewScript = function (script) {
  capturedScript = script;
  capturedDisplayURL = script.source.displayURL;
  capturedSourceMapURL = script.source.sourceMapURL;
  dbg.onNewScript = undefined;
};
var fun = gw.makeDebuggeeValue(g.Function('
assertEq(capturedScript, fun.script);

assertEq(capturedDisplayURL, fun.script.source.displayURL);
assertEq(capturedDisplayURL, 'munge.js');

assertEq(capturedSourceMapURL, fun.script.source.sourceMapURL);
assertEq(capturedSourceMapURL, 'grunge.map');
