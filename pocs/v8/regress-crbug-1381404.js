const a = {"maxByteLength": 15061061};
const e = d8.serializer.serialize(a);
const f = new Uint8Array(e);
f[18] = 114;
print(() => { d8.serializer.deserialize(e); });
