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

eval(`
    function conf1() {}
    function conf2() {}
    function conf3() {}
    function conf4() {}
    function conf5() {}
    function nonConf() {}
`);

const expectedConfigurableDescriptor = `{
  "value": "<function>",
  "writable": true,
  "enumerable": true,
  "configurable": true
}`;

const expectedNonConfigurableDescriptor = `{
  "value": "<function>",
  "writable": true,
  "enumerable": true,
  "configurable": false
}`;

print(stringifyDescriptor("conf1") === expectedConfigurableDescriptor);
print(stringifyDescriptor("conf2") === expectedConfigurableDescriptor);
print(stringifyDescriptor("conf3") === expectedConfigurableDescriptor);
print(stringifyDescriptor("conf4") === expectedConfigurableDescriptor);
print(stringifyDescriptor("conf5") === expectedConfigurableDescriptor);
print(stringifyDescriptor("nonConf") === expectedNonConfigurableDescriptor);
