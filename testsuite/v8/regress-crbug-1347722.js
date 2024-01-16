





const proxy = new Proxy(Int16Array, {"get": () => { throw 'lol'; }});
const rab = new ArrayBuffer(1632, {"maxByteLength": 4096});
try {
  new proxy(rab);
} catch {
}
