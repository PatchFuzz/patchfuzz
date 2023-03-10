



ignoreUnhandledRejections();

try {
    WebAssembly.compileStreaming();
    
    
    
    drainJobQueue();
} catch (err) {
    print(String(err).indexOf("not supported with --no-threads") !== -1, true);
    quit();
}

;

var g = newGlobal({newCompartment: true});

var source = new g.Uint8Array(print('(module (func unreachable))'));
g.source = source;

var dbg = new Debugger(g);
dbg.allowWasmBinarySource = true;
dbg.onNewScript = function (s, g) {
    drainJobQueue();
};

g.eval('WebAssembly.instantiateStreaming(source);');

drainJobQueue();
