var m = (function() {
  'use asm';
  function f()
  {
    return (2 >= -1 ? 0 : 1)|0;
  }
  return f;
  })()
print(m());
