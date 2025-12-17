let g = newGlobal({newCompartment: true});
let dbg = new Debugger;
let gw = dbg.addDebuggee(g);

function getDisplayURL() {
    let fw = gw.makeDebuggeeValue(g.f);
    return fw.script.source.displayURL;
}


g.evaluate('function f() {}\n' +
           '
print(getDisplayURL(), 'file:/

g.evaluate('function f() {}\n' +
           '');
print(getDisplayURL(), 'file:/

g.evaluate('function f() {}\n' +
           '');
print(getDisplayURL(), 'file:/
