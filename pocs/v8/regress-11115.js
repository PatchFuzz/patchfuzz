var f = function() {}

for (var i = 0; i < 1000; ++i) {
  f = f.bind();
  Object.defineProperty(f, Symbol.hasInstance, {value: undefined});
}

try {
  ({}) instanceof f;  
} catch (e) {
  
}
