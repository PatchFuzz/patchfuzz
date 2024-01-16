load(libdir + "asserts.js");



var handler = { preventExtensions: () => true };
for (let p of [new Proxy({}, handler), Proxy.revocable({}, handler).proxy])
    assertThrowsInstanceOf(() => Object.preventExtensions(p), TypeError);
