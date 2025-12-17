;


var handler = { getOwnPropertyDescriptor: () => ({ configurable: false }) };
for (let p of [new Proxy({}, handler), Proxy.revocable({}, handler).proxy])
    print(() => Object.getOwnPropertyDescriptor(p, 'foo'), TypeError);
