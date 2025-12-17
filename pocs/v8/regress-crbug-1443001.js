try {
  let hook = async_hooks.createHook({
    init: function() {
      d8.terminate();
      Object.getOwnPropertyNames({});
    }
  });
  hook.enable();
  WebAssembly.compile(959070);
} catch(e) {
}
