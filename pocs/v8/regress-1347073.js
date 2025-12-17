var values = [];
values.length = 1;
Object.prototype.__defineGetter__(0, function() {
  throw new Error('foo');
});
let tag = new WebAssembly.Tag({parameters: ['externref']});
print(() => new WebAssembly.Exception(tag, values), Error, 'foo');
