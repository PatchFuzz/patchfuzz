const set = new WeakSet()
const obj = {};

gc({ type: 'major' });

const foo = new Int8Array(0x0F000000);

set.add(obj);
