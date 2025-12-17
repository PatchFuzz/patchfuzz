;


var holder = Proxy.revocable({}, {});


print(Object.getPrototypeOf(holder), Object.prototype);

print(Object.getOwnPropertyNames(holder), [ 'proxy', 'revoke' ]);


print(Object.getPrototypeOf(holder.revoke), Function.prototype);


var proxyLog = []
var revokerLog = []
var holderLog = []

function addUnique(l, v)
{
    print(l.indexOf(v), -1);
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
print(r(), undefined, "Revoke trap must return undefined");
print(() => p.foo, TypeError);
print(r(), undefined, "Revoke trap must return undefined");


for (let i = 0; i < proxyLog.length; i++)
    proxyLog[i].foo;
