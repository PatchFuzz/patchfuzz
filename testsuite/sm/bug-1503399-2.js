


load(libdir + "asserts.js");

let g = newGlobal({newCompartment: true});
let stream = new g.ReadableStream({});
let reader = ReadableStream.prototype.getReader.call(stream);
nukeCCW(stream);

assertErrorMessage(() => reader.read(), TypeError, "can't access dead object");
assertErrorMessage(() => reader.releaseLock(), TypeError, "can't access dead object");
