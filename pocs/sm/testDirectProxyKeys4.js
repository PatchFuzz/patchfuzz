;



var handler = { ownKeys: () => [ 'foo', 'foo' ] };
for (let p of [new Proxy({}, handler), Proxy.revocable({}, handler).proxy])
    print(() => Object.keys(p), TypeError);
