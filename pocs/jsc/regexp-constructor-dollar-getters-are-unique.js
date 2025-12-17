function print(x) {
    if (!x)
        throw new Error("Bad assertion!");
}

const seenGetters = new WeakSet();

for (const [key, desc] of Object.entries(Object.getOwnPropertyDescriptors(RegExp))) {
    if (!/^\$\d$/.test(key))
        continue;

    print(typeof desc.get === "function");
    print(!seenGetters.has(desc.get));

    seenGetters.add(desc.get);
}
