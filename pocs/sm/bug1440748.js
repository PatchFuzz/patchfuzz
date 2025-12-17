const REPEAT_SIZE_BYTES = 16;  
const NREPEATS = 50000;        
const STEP_SIZE_BYTES = 8;     



let originalObject = new Uint16Array(new ArrayBuffer(8));
let goodSerializedData = serialize(originalObject, [], { scope: "DifferentProcess" });
let goodBytes = new Uint8Array(goodSerializedData.arraybuffer);
print(goodBytes.length % 8, 0, "this test expects serialized data to consist of 64-bit units");

for (let i = 0; i + REPEAT_SIZE_BYTES <= goodBytes.length; i += STEP_SIZE_BYTES) {
    
    let badBytes = new Uint8Array(i + NREPEATS * REPEAT_SIZE_BYTES);
    badBytes.set(goodBytes.slice(0, i), 0);

    
    let slab = goodBytes.slice(i, i + REPEAT_SIZE_BYTES);
    for (let j = i; j < badBytes.length; j += REPEAT_SIZE_BYTES)
        badBytes.set(slab, j);
    

    
    let badSerializedData = serialize({}, [], { scope: "DifferentProcess" });
    badSerializedData.arraybuffer = badBytes.buffer;

    
    try {
        deserialize(badSerializedData);
        print(false, true, "no error");
    } catch (exc) {
    }
}
