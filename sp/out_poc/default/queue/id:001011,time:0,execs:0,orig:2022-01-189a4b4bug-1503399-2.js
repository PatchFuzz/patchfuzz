


;

let g = newGlobal({newCompartment: true});
let stream = new g.ReadableStream({});
let reader = ReadableStream.prototype.getReader.call(stream);
nukeCCW(stream);

print(() => reader.read(), TypeError, "can't access dead object");
print(() => reader.releaseLock(), TypeError, "can't access dead object");
