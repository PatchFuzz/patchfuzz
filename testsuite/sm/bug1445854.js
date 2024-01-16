
load(libdir + "asserts.js");
assertThrowsInstanceOf(() => ReadableStream.prototype.tee(),
    TypeError);
