;

var r = Proxy.revocable({}, {});
var r2 = Proxy.revocable(function(){}, {});
r.revoke();
r2.revoke();

var p = r.proxy;
var p2 = r2.proxy;

print(() => ({} instanceof p), TypeError);
print(() => ({} instanceof p2), TypeError);

print(() => Object.prototype.toString.call(p), TypeError);
print(() => Object.prototype.toString.call(p2), TypeError);

print(() => RegExp.prototype.exec.call(p, ""), TypeError);
print(() => RegExp.prototype.exec.call(p2, ""), TypeError);
