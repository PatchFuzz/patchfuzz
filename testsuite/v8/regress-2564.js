


























var o = [ function f0() { throw new Error(); },
          function f1() { o[0](); },
          function f2() { o[1](); },
          function f3() { o[2](); } ];

Error.prepareStackTrace = function(error, frames) {
  Error.prepareStackTrace = undefined;  
  try {
    assertEquals(5, frames.length);
    
    for (var i = 0; i < frames.length - 1; i++) {
      assertEquals(o[i], frames[i].getFunction());
      assertEquals(o, frames[i].getThis());
      
      assertEquals(undefined, frames[i].receiver);
      assertEquals(undefined, frames[i].fun);
      assertEquals(undefined, frames[i].pos);
    }
    return "success";
  } catch (e) {
    return "fail";
  }
}

try {
  o[3]();
} catch (e) {
  assertEquals("success", e.stack);
};


var o = [ function f0() { throw new Error(); },
          function f1() { o[0](); },
          function f2() { "use strict"; o[1](); },
          function f3() { o[2](); } ];

Error.prepareStackTrace = function(error, frames) {
  Error.prepareStackTrace = undefined;  
  try {
    assertEquals(5, frames.length);
    for (var i = 0; i < 2; i++) {
      
      assertEquals(o[i], frames[i].getFunction());
      assertEquals(o, frames[i].getThis());
    }
    for (var i = 2; i < frames.length; i++) {
      
      assertEquals(undefined, frames[i].getFunction());
      assertEquals(undefined, frames[i].getThis());
    }
    for (var i = 0; i < frames.length - 1; i++) {
      
      assertEquals("f"+i, frames[i].getFunctionName());
    }
    return "success";
  } catch (e) {
    return e;
  }
}

try {
  o[3]();
} catch (e) {
  assertEquals("success", e.stack);
};


var o = [ function f0() { "use strict"; throw new Error(); },
          function f1() { o[0](); },
          function f2() { o[1](); },
          function f3() { o[2](); } ];

Error.prepareStackTrace = function(error, frames) {
  Error.prepareStackTrace = undefined;  
  try {
    assertEquals(5, frames.length);
    for (var i = 0; i < frames.length; i++) {
      
      assertEquals(undefined, frames[i].getFunction());
      assertEquals(undefined, frames[i].getThis());
      if (i < frames.length - 1) {  
        assertEquals("f"+i, frames[i].getFunctionName());
      }
    }
    return "success";
  } catch (e) {
    return e;
  }
}

try {
  o[3]();
} catch (e) {
  assertEquals("success", e.stack);
};
