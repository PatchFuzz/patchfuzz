






























var value = (function() {
  var result;
  try {
    throw 42;
  } catch (e) {
    result = eval("e");
  }
  return result;
})();

assertEquals(42, value);






var value = (function() {
  var result;
  try {
    throw 87;
  } catch(e) {
    
    
    (function() { e; });
    result = eval("e");
  }

  
  
  try {
    eval("e");
    assertTrue(false);  
  } catch(exception) {
    assertTrue(exception instanceof ReferenceError);
    return result;
  }
})();

assertEquals(87, value);
