let ar = new Int32Array(new SharedArrayBuffer(Int32Array.BYTES_PER_ELEMENT * 1073741824));


var exception;
try {
    ar.sort();
} catch (e) {
    exception = e;
}

if (exception != "RangeError: Out of memory")
    throw "FAILED: " + exception;


exception = undefined;
try {
    ar.sort((x, y) => { return x > y });
} catch (e) {
    exception = e;
}

if (exception != "RangeError: Out of memory")
    throw "FAILED: " + exception;

