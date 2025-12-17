var {proxy, revoke} = Proxy.revocable({x:1}, {});

function foo(o) {
  var res = 0;
  for (var i = 0; i < 2; i++) {
    res += o.x;
  }
  return res;
}

with ({}) {}
for (var i = 0; i < 100; i++) {
  print(foo(proxy), 2);
}

revoke();
var caught = false;
try {
  foo(proxy);
} catch {
  caught = true;
}
print(caught, true);
