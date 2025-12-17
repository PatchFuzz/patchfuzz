const rab = new ArrayBuffer(ArrayBuffer, {"maxByteLength": 7158170});
const ta = new Uint8Array(rab);
const proxy = new Proxy(ta, {});
proxy.valueOf = () => {};
print(() => { Object.seal(proxy); }, TypeError);
