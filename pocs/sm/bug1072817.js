var r = Proxy.revocable({}, {});
var p = r.proxy;
r.revoke();
p instanceof Object;
