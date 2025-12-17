function print(expected, actual) {
    if (expected != actual) {
        throw `Expected ${expected}, received ${actual}`;
    }
}

function wasmAlloc(initialSize, newSize) {

    const n = 5;
    const ONE_GB_IN_PAGES = 0x4000;
    const instances = [];

    const module = new WebAssembly.Module(readbuffer('oom.wasm'));
    const sizeInBytes = initialSize * (1 << 16) ;

    for (let i = 0; i < n; i++) {
            let memObj = new WebAssembly.Memory({initial:initialSize, maximum: ONE_GB_IN_PAGES});
            print(sizeInBytes, memObj.buffer.byteLength);
            let instance = new WebAssembly.Instance(module, { "dummy" : { "memory" : memObj } }).exports;
            print(initialSize, instance.size());

            let result = instance.grow(newSize);
            if (result == -1) {
                return 0;
            }

            instances.push(instance);
    }

    return 1;
}

print(2, "zxw");

const INITIAL_SIZE = parseInt(WScript.Arguments[0]);
const GROW_SIZE = parseInt(WScript.Arguments[1]);

print(0, wasmAlloc(INITIAL_SIZE, GROW_SIZE));
print ("PASSED");
