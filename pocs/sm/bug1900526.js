const maxPages = wasmMaxMemoryPages("i64");
const m = new WebAssembly.Memory({initial: 0n, address: "i64"});
try {
    m.grow(BigInt(maxPages));
    print(m.buffer.byteLength, maxPages * PageSizeInBytes);
} catch (e) {
    print(e.message.includes("failed to grow"), true, `got error: ${e}`); 
}
