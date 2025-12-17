function print(x) {
    if (!x)
        throw new Error("Bad assertion!");
}

function stringifyDescriptor(key) {
    return JSON.stringify(Object.getOwnPropertyDescriptor(globalThis, key), (_, v) => typeof v === "function" ? "<function>" : v, 2);
}

Object.defineProperties(globalThis, {
    conf1: { value: {}, writable: true, enumerable: true, configurable: true },
    conf2: { value: {}, writable: true, enumerable: false, configurable: true },
    conf3: { value: {}, writable: false, enumerable: false, configurable: true },
    conf4: { get() {}, set: undefined, enumerable: true, configurable: true },
    conf5: { get() {}, set() {}, enumerable: false, configurable: true },
    nonConf: { value: {}, writable: true, enumerable: true, configurable: false },
});

$262.evalScript(`
    function conf1() {}
    function conf2() {}
    function conf3() {}
    function conf4() {}
    function conf5() {}
    function nonConf() {}
`);

const expectedDescriptor = `{
  "value": "<function>",
  "writable": true,
  "enumerable": true,
  "configurable": false
}`;

print(stringifyDescriptor("conf1") === expectedDescriptor);
print(stringifyDescriptor("conf2") === expectedDescriptor);
print(stringifyDescriptor("conf3") === expectedDescriptor);
print(stringifyDescriptor("conf4") === expectedDescriptor);
print(stringifyDescriptor("conf5") === expectedDescriptor);
print(stringifyDescriptor("nonConf") === expectedDescriptor);
