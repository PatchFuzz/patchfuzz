load(libdir + "asserts.js");


var handler = { getOwnPropertyDescriptor: () => ({ configurable: false }) };
for (let p of [new Proxy({}, handler), Proxy.revocable({}, handler).proxy])
    assertThrowsInstanceOf(() => Object.getOwnPropertyDescriptor(p, 'foo'), TypeError);
