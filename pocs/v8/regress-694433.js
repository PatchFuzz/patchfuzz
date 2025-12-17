var size = Math.floor(0xFFFFFFFF / 4) + 1;
(function() {
  
  
  
  try {
    print(WebAssembly.validate(new Uint16Array(size)));
  } catch {
    print(() => new Uint16Array(size), RangeError);
  }
})();
gc();
