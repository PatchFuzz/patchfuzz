













var arrayBuffer = new ArrayBuffer;
var dataView = new DataView(arrayBuffer);
assert (dataView.buffer === arrayBuffer);
