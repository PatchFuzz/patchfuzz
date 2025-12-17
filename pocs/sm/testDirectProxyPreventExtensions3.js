;



var handler = { preventExtensions: () => true };
for (let p of [new Proxy({}, handler), Proxy.revocable({}, handler).proxy])
    print(() => Object.preventExtensions(p), TypeError);
