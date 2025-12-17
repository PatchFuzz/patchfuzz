enableShellAllocationMetadataBuilder();

var m = new WebAssembly.Memory({
    initial: 0,
    maximum: 0
});
m.toResizableBuffer();
m.toFixedLengthBuffer();

if (wasmThreadsEnabled()) {
    var m = new WebAssembly.Memory({
        initial: 0,
        maximum: 0,
        shared: true,
    });
    m.toResizableBuffer();
}
