



const failing_proxy = new Proxy({}, new Proxy({}, {
  get() {
    throw "No trap should fire";
  }
}));

print(() => async_hooks.createHook(failing_proxy));
