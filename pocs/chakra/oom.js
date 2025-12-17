function print(expected, actual) {
    if (expected != actual) {
        throw `Expected ${expected}, received ${actual}`;
    }
}

function wasmAlloc(initialSize, newSize) {

    let memories = [];
    const n = 5;

    for (let i = 0; i < n; i++) {
        try {
            let m = new WebAssembly.Memory({initial:initialSize});
            print(initialSize * (1 << 16) , m.buffer.byteLength);
            m.grow(newSize);
            memories.push(m);
        } catch (e) {
            return e;
        }
    }

    return new Error('OOM Expected');
}

print(2, "zxw");

const INITIAL_SIZE = parseInt(WScript.Arguments[0]);
const GROW_SIZE = parseInt(WScript.Arguments[1]);

let {name, message } = wasmAlloc(INITIAL_SIZE, GROW_SIZE);
print("argument out of range", message); 
print("RangeError", name);
print ("PASSED");
