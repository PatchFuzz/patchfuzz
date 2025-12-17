(async function test() {
  let promise = undefined;
  let boom = {
    toString: function() {
      print(undefined, promise);
      promise = WebAssembly.instantiate();
      throw new Error('foo');
    }
  };

  print(
      () => new WebAssembly.Memory({initial: boom, index: boom}), Error, 'foo');
  print(promise, Promise);
  print(promise);
})();
