var value = (function() {
  var result;
  try {
    throw 42;
  } catch (e) {
    result = eval("e");
  }
  return result;
})();

print(42, value);






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
    print(false);  
  } catch(exception) {
    print(exception instanceof ReferenceError);
    return result;
  }
})();

print(87, value);
