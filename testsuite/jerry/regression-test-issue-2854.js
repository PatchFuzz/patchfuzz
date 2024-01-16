













var buffer = new ArrayBuffer()
var dataView = new DataView(buffer, 0, undefined)

assert(dataView.byteLength === 0);
