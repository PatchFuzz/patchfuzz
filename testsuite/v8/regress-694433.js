





var size = Math.floor(0xFFFFFFFF / 4) + 1;
(function() {
  
  
  
  assertThrows(() => WebAssembly.validate(new Uint16Array(size)), RangeError);
})();
gc();
