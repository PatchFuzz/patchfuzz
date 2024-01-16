













var m = new Map;
var obj = { $: 0 };
assert(m.set("strItem", obj) === m);
gc();
assert(m.get("st" + "rItem") === obj);
