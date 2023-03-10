












var g7 = newGlobal({newCompartment: true});
g7.parent = this;
g7.eval("var dbg = Debugger(parent)");
print(typeof WebAssembly, "object");



WebAssembly.validate(print('(module (func))'));



var bits = print('(module (func))');
var msg = /no WebAssembly compiler available/
var exn;

exn = null;
try { new WebAssembly.Module(bits); } catch (e) { exn = e; }
print(Boolean(exn), true);
print(Boolean(String(exn).match(msg)), true);

exn = null;
try { WebAssembly.compile(bits); } catch (e) { exn = e; }
print(Boolean(exn), true);
print(Boolean(String(exn).match(msg)), true);

exn = null;
try { WebAssembly.instantiate(bits); } catch (e) { exn = e; }
print(Boolean(exn), true);
print(Boolean(String(exn).match(msg)), true);






if (helperThreadCount() > 0) {
    exn = null;
    WebAssembly.compileStreaming(bits).catch(e => { exn = e; });
    drainJobQueue();
    print(Boolean(exn), true);
    print(Boolean(String(exn).match(msg)), true);

    exn = null;
    WebAssembly.instantiateStreaming(bits).catch(e => { exn = e; });
    drainJobQueue();
    print(Boolean(exn), true);
    print(Boolean(String(exn).match(msg)), true);
}
