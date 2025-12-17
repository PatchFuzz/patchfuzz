var memory_properties_1 = {};
Object.defineProperty(memory_properties_1, 'initial', {
  get: function() {
    throw new Error('boom: initial');
  }
});
print(
    () => new WebAssembly.Memory(memory_properties_1), Error, 'boom: initial');

var memory_properties_2 = {initial: 10};
Object.defineProperty(memory_properties_2, 'maximum', {
  get: function() {
    throw new Error('boom: maximum');
  }
});
print(
    () => new WebAssembly.Memory(memory_properties_2), Error, 'boom: maximum');
