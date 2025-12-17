let tag = new WebAssembly.Tag({'parameters': []});
let proxy = new Proxy({}, {
  'get': () => {
    throw new Error('boom')
  }
});

print(() => new WebAssembly.Exception(tag, [], proxy), Error, 'boom');
