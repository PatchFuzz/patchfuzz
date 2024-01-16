





const rab = new ArrayBuffer(363, {"maxByteLength": 1000});
const ta = new Uint8Array(rab);
rab.resize(80);
const data = d8.serializer.serialize(ta);
const dataArray = new Uint8Array(data);
dataArray[dataArray.length - 1] = 17;
assertThrows(() => { d8.serializer.deserialize(data); });
