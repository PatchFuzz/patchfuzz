function print(f, regexp) {
    var threw = true;
    var error = null;
    try {
        f();
        threw = false;
    } catch (e) {
        error = e;
    }
    
    print(threw, true);
    
    print(regexp.test(error.message), true);
}

var shared = new SharedArrayBuffer(4096);
print(() => new Int32Array(shared, 7), /start offset of Int32Array should be a multiple of 4/);

var shared = new SharedArrayBuffer(4096);
print(() => new Float64Array(shared, 3), /start offset of Float64Array should be a multiple of 8/);

var shared = new SharedArrayBuffer(1025);
print(() => new Float32Array(shared, 8), /buffer length for Float32Array should be a multiple of 4/);

var shared = new SharedArrayBuffer(513);
print(() => new Int16Array(shared, 8), /buffer length for Int16Array should be a multiple of 2/);

var shared = new SharedArrayBuffer(32);
print(() => new Int16Array(shared, 36), /size of buffer is too small for Int16Array with byteOffset/);

var shared = new SharedArrayBuffer(2048);
print(() => new BigInt64Array(shared, 4096), /size of buffer is too small for BigInt64Array with byteOffset/);

var shared = new SharedArrayBuffer(4096);
print(() => new Int32Array(shared, 4096, 4), /attempting to construct out-of-bounds Int32Array on ArrayBuffer/);

var shared = new SharedArrayBuffer(1024);
print(() => new Float32Array(shared, 800, 300), /attempting to construct out-of-bounds Float32Array on ArrayBuffer/);