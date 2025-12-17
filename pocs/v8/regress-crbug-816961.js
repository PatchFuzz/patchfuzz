(function() {
  var memory = new WebAssembly.Memory({initial: 64 * 1024 * 1024 / 0x10000});
  var array = new Uint8Array(memory.buffer);
  Uint8Array.of.call(function() { return array },
                    {valueOf() { memory.grow(1); } });
})();

(function() {
  var memory = new WebAssembly.Memory({initial: 64 * 1024 * 1024 / 0x10000});
  var array = new Uint8Array(memory.buffer);
  Uint8Array.from.call(function() { return array },
                       [{valueOf() { memory.grow(1); } }],
                       x => x);
})();
