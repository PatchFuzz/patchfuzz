var {proxy, revoke} = Proxy.revocable({}, {});

var obj = {__proto__: proxy, a: 1};

revoke();

print(delete obj.a, true);
print(delete obj.b, true);

