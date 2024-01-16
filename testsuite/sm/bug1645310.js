












var g7 = newGlobal({newCompartment: true});
g7.parent = this;
g7.eval("var dbg = Debugger(parent)");
assertEq(typeof WebAssembly, "object");



WebAssembly.validate(wasmTextToBinary('(module (func))'));



var bits = wasmTextToBinary('(module (func))');
var msg = /no WebAssembly compiler available/
var exn;

exn = null;
try { new WebAssembly.Module(bits); } catch (e) { exn = e; }
assertEq(Boolean(exn), true);
assertEq(Boolean(String(exn).match(msg)), true);

exn = null;
try { WebAssembly.compile(bits); } catch (e) { exn = e; }
assertEq(Boolean(exn), true);
assertEq(Boolean(String(exn).match(msg)), true);

exn = null;
try { WebAssembly.instantiate(bits); } catch (e) { exn = e; }
assertEq(Boolean(exn), true);
assertEq(Boolean(String(exn).match(msg)), true);






if (helperThreadCount() > 0) {
    exn = null;
    WebAssembly.compileStreaming(bits).catch(e => { exn = e; });
    drainJobQueue();
    assertEq(Boolean(exn), true);
    assertEq(Boolean(String(exn).match(msg)), true);

    exn = null;
    WebAssembly.instantiateStreaming(bits).catch(e => { exn = e; });
    drainJobQueue();
    assertEq(Boolean(exn), true);
    assertEq(Boolean(String(exn).match(msg)), true);
}
