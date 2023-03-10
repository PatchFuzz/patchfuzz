



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
source.url = "http://example.org/test.wasm";
source.sourceMappingURL = "http://example.org/test.wasm.map";
g.source = source;

var gotUrl, gotSourceMapURL;
var dbg = new Debugger(g);
dbg.allowWasmBinarySource = true;
dbg.onNewScript = function (s, g) {
    gotUrl = s.source.url;
    gotSourceMapURL = s.source.sourceMapURL;
};

g.eval('WebAssembly.instantiateStreaming(source);');

drainJobQueue();

print(gotUrl, "http://example.org/test.wasm");
print(gotSourceMapURL, "http://example.org/test.wasm.map");
