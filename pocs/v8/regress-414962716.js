const o1 = {Text: 'foo'};
const o2 = {Text: 'bar'};
Object.defineProperty(o2, Symbol.toPrimitive, {});
o2.toJSON = 42;
JSON.parse(JSON.stringify([o1,o2]));
