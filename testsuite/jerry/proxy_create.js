













var target = {}
var handler = {};
var proxy = new Proxy(target, handler);

var revocable = Proxy.revocable(target, handler);
revocable.revoke();
var rev_proxy = revocable.proxy;

try {
  Proxy(target, handler);
  assert(false);
} catch (e) {
  assert(e instanceof TypeError);
}

try {
  new Proxy(undefined, undefined);
  assert(false);
} catch (e) {
  assert(e instanceof TypeError);
}

try {
  new Proxy(rev_proxy);
  assert(false);
} catch (e) {
  assert(e instanceof TypeError);
}


var proxy_rev_handler = new Proxy({}, rev_proxy);
var proxy_rev_target_Br = new Proxy(rev_proxy, {});
