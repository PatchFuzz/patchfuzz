let g = newGlobal({newCompartment: true});
let dbg = new Debugger;
let gw = dbg.addDebuggee(g);

function getDisplayURL() {
    let fw = gw.makeDebuggeeValue(g.f);
    return fw.script.source.displayURL;
}


g.evaluate("function f(x) { return 2*x; }");
print(getDisplayURL(), null);


g.evaluate("function f(x) { return 2*x; }", {displayURL: 'file:/
print(getDisplayURL(), 'file:/


let fired = false;
dbg.onDebuggerStatement = function (frame) {
    fired = true;
    print(frame.script.source.displayURL, 'file:/
};
g.evaluate('(function () { (function () { debugger; })(); })();',
           {displayURL: 'file:/
print(fired, true);


g.evaluate('function f() {}\n' +
           '
print(getDisplayURL(), 'file:/

g.evaluate('function f() {}\n' +
           '');
print(getDisplayURL(), 'file:/

g.evaluate('function f() {}\n' +
           '');
print(getDisplayURL(), 'file:/



g.evaluate('function f() {}\n' +
           '
print(getDisplayURL(), 'http://example.com/has');



g.evaluate('function f() {}\n' +
           '
           'function z() {}');
print(getDisplayURL(), null);
print('z' in g, true);


g.evaluate('function f() {}\n' +
           '
           '
print(getDisplayURL(), 'http://example.com/bar.js');


g.evaluate('function f() {}\n' +
           '
           {displayURL: 'http://example.com/bar.js'});
print(getDisplayURL(), 'http://example.com/foo.js');




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
print(capturedScript, fun.script);

print(capturedDisplayURL, fun.script.source.displayURL);
print(capturedDisplayURL, 'munge.js');

print(capturedSourceMapURL, fun.script.source.sourceMapURL);
print(capturedSourceMapURL, 'grunge.map');
