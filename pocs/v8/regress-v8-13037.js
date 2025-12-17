var r = Proxy.revocable({}, {});
r.revoke();
print(() => {
  Object.prototype.toString.call(r.proxy)
}, TypeError, "Cannot perform 'Object.prototype.toString' on a proxy that has been revoked");
