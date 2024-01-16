




function assertEquals(expected, actual) {
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
            assertEquals(initialSize * (1 << 16) , m.buffer.byteLength);
            m.grow(newSize);
            memories.push(m);
        } catch (e) {
            return e;
        }
    }

    return new Error('OOM Expected');
}

assertEquals(2, WScript.Arguments.length);

const INITIAL_SIZE = parseInt(WScript.Arguments[0]);
const GROW_SIZE = parseInt(WScript.Arguments[1]);

let {name, message } = wasmAlloc(INITIAL_SIZE, GROW_SIZE);
assertEquals("argument out of range", message); 
assertEquals("RangeError", name);
print ("PASSED");
