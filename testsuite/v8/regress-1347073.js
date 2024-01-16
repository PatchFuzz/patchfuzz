



var values = [];
Object.prototype.__defineGetter__(0, function() {
  throw new Error('foo');
});
let tag = new WebAssembly.Tag({parameters: ['externref']});
assertThrows(() => new WebAssembly.Exception(tag, values), Error, 'foo');
