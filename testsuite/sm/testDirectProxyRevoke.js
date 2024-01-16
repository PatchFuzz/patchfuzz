load(libdir + "asserts.js");


var holder = Proxy.revocable({}, {});


assertEq(Object.getPrototypeOf(holder), Object.prototype);

assertDeepEq(Object.getOwnPropertyNames(holder), [ 'proxy', 'revoke' ]);


assertEq(Object.getPrototypeOf(holder.revoke), Function.prototype);


var proxyLog = []
var revokerLog = []
var holderLog = []

function addUnique(l, v)
{
    assertEq(l.indexOf(v), -1);
    l.push(v);
}

for (let i = 0; i < 5; i++) {
    holder = Proxy.revocable({}, {});
    addUnique(holderLog, holder);
    addUnique(revokerLog, holder.revoke);
    addUnique(proxyLog, holder.proxy);
}


var p = proxyLog.pop();
var r = revokerLog.pop();



p.foo;
assertEq(r(), undefined, "Revoke trap must return undefined");
assertThrowsInstanceOf(() => p.foo, TypeError);
assertEq(r(), undefined, "Revoke trap must return undefined");


for (let i = 0; i < proxyLog.length; i++)
    proxyLog[i].foo;
