var depth = 0;
test();
function test() {
  
  
  
  if (++depth > 400)
     return;

  var catch1, catch2, catch3, finally1, finally2, finally3;
  function* gen() {
    yield 1;
    try {
      try {
        try {
          yield 1;
        } finally {
          test();
        }
      } catch (e) {
        finally2 = true;
      }
    } catch (e) {    }
  }
  iter = gen();
  iter.next();
  iter.next();
  iter.return();
  gc();
} 
