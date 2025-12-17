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
print(getSourceMapURL(), null);


g.evaluate("function f(x) { return 2*x; }", {sourceMapURL: 'file:/
print(getSourceMapURL(), 'file:/


let fired = false;
dbg.onDebuggerStatement = function (frame) {
    fired = true;
    print(frame.script.source.sourceMapURL, 'file:/
};
g.evaluate('(function () { (function () { debugger; })(); })();',
           {sourceMapURL: 'file:/
print(fired, true);


g.evaluate('function f() {}\n' +
           '
print(getSourceMapURL(), 'file:/

g.evaluate('function f() {}\n' +
           '');
print(getSourceMapURL(), 'file:/

g.evaluate('function f() {}\n' +
           '');
print(getSourceMapURL(), 'file:/



g.evaluate('function f() {}\n' +
           '
print(getSourceMapURL(), 'http://example.com/has');



g.evaluate('function f() {}\n' +
           '
           'function z() {}');
print(getSourceMapURL(), null);
print('z' in g, true);



g.evaluate('function f() {}\n' +
           '
           '
print(getSourceMapURL(), 'http://example.com/bar.js.map');


g.evaluate('function f() {}\n' +
           '
           {sourceMapURL: 'http://example.com/bar.js.map'});
print(getSourceMapURL(), 'http://example.com/foo.js.map');


setSourceMapURL('baz.js.map');
print(getSourceMapURL(), 'baz.js.map');

setSourceMapURL('');
print(getSourceMapURL(), 'baz.js.map');
