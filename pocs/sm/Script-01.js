var global = newGlobal({newCompartment: true});
global.eval('function f() { debugger; }');
global.eval('function g() { debugger; }');

var debug = new Debugger(global);

function evalAndNoteScripts(prog) {
    var scripts = {};
    debug.onDebuggerStatement = function(frame) {
        if (frame.type == "call")
            print(frame.script, frame.callee.script);
        scripts.frame = frame.script;
        if (frame.arguments[0])
            scripts.argument = frame.arguments[0].script;
    };
    global.eval(prog);
    return scripts;
}



var scripts = evalAndNoteScripts('f(f)');
print(scripts.frame, scripts.argument);
var fScript = scripts.argument;


scripts = evalAndNoteScripts('f(f)');
print(scripts.frame, fScript);
print(scripts.argument, fScript);


scripts = evalAndNoteScripts('f(g)');
print(scripts.frame !== scripts.argument, true);
print(scripts.frame, fScript);
var gScript = scripts.argument;


scripts = evalAndNoteScripts('g(f)');
print(scripts.frame !== scripts.argument, true);
print(scripts.frame,    gScript);
print(scripts.argument, fScript);



global.eval('function gen1(x) { return function clo(y) { return x+y; }; }');
global.eval('var clo1 = gen1(42);');
global.eval('var clo2 = gen1("smoot");');
var scripts1 = evalAndNoteScripts('f(clo1)');
var scripts2 = evalAndNoteScripts('f(clo2)');
print(scripts1.argument, scripts2.argument);



global.eval('function gen2(x) { function clo(y) { return x+y; }; return clo; }');
global.eval('var clo1 = gen2(42);');
global.eval('var clo2 = gen2("smoot");');
var scripts1 = evalAndNoteScripts('f(clo1)');
var scripts2 = evalAndNoteScripts('f(clo2)');
print(scripts1.argument, scripts2.argument);



global.eval('function gen3(x) { if (true) { function clo(y) { return x+y; }; return clo; } }');
global.eval('var clo1 = gen3(42);');
global.eval('var clo2 = gen3("smoot");');
var scripts1 = evalAndNoteScripts('f(clo1)');
var scripts2 = evalAndNoteScripts('f(clo2)');
print(scripts1.argument, scripts2.argument);
