



const o1 = {k:1};
const o2 = Object.create(o1);
for (let i = 0; i < 1100; i++) {
  Object.defineProperty(o1, "k" + i, {value: 0, enumerable: false});
}
Object.defineProperty(o1, "enum", {value: 1, enumerable: false, configurable: true});
for (let k in o2) {}
Object.defineProperty(o1, "enum", {value: 1, enumerable: true, configurable: true});
let last;
for (let k in o2) { last = k }
assertEquals("enum", last);
