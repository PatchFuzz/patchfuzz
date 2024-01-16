
var {proxy, revoke} = Proxy.revocable({}, {});

var obj = {__proto__: proxy, a: 1};

revoke();

assertEq(delete obj.a, true);
assertEq(delete obj.b, true);

