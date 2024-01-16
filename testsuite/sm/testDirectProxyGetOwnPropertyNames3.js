load(libdir + "asserts.js");


var handler = { ownKeys: () => undefined };
for (let p of [new Proxy({}, handler), Proxy.revocable({}, handler).proxy])
    assertThrowsInstanceOf(() => Object.getOwnPropertyNames(p), TypeError);
