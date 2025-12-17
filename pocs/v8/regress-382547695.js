class C6 {}

const o11 = {
    "parameters": [],
    "results": [],
};
const v12 = new WebAssembly.Function(o11, C6);
const o17 = {
    "element": "anyfunc",
    "initial": 1,
};
const v18 = new WebAssembly.Table(o17);
v18.set(0, v12);
