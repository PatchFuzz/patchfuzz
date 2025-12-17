;



var handler = { ownKeys: () => undefined };
for (let p of [new Proxy({}, handler), Proxy.revocable({}, handler).proxy])
    print(() => Object.keys(p), TypeError);
