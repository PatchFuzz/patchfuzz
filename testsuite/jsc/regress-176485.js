var exception;
try {
    a2 = {};
    Object.defineProperty(a2, "length",{get: Int32Array});
    new Int32Array(this.a2);
} catch (e) {
    exception = e;
}

if (exception != "TypeError: calling Int32Array constructor without new is invalid")
    throw "Exception not thrown";
