













var target_called = 0;
function target_method() {
  target_called++;
}

var proxy_revocable_function = Proxy.revocable(target_method, {})
var proxy_function = proxy_revocable_function.proxy;



assert(typeof(proxy_function) === "function");


var new_obj = new proxy_function()
assert(new_obj instanceof target_method);
assert(target_called === 1);



var array_result = Array.from.call(proxy_function, [1, 2, 3]);
assert(Array.isArray(array_result) === false);
assert(target_called === 2);

proxy_revocable_function.revoke();



assert(typeof(proxy_function) === "function");


try {
  new proxy_function();
  assert(false);
} catch (ex) {
  assert(ex instanceof TypeError);
}

assert(target_called === 2);



try {
  Array.from.call(proxy_function, [1, 2, 3]);
  assert(false);
} catch (ex) {
  assert(ex instanceof TypeError);
}

assert(target_called === 2);
