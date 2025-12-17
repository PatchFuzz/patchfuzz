var o = [ function f0() { throw new Error(); },
          function f1() { o[0](); },
          function f2() { o[1](); },
          function f3() { o[2](); } ];

Error.prepareStackTrace = function(error, frames) {
  Error.prepareStackTrace = undefined;  
  try {
    print(5, frames.length);
    
    for (var i = 0; i < frames.length - 1; i++) {
      print(o[i], frames[i].getFunction());
      print(o, frames[i].getThis());
      
      print(undefined, frames[i].receiver);
      print(undefined, frames[i].fun);
      print(undefined, frames[i].pos);
    }
    return "success";
  } catch (e) {
    return "fail";
  }
}

try {
  o[3]();
} catch (e) {
  print("success", e.stack);
};


var o = [ function f0() { throw new Error(); },
          function f1() { o[0](); },
          function f2() { "use strict"; o[1](); },
          function f3() { o[2](); } ];

Error.prepareStackTrace = function(error, frames) {
  Error.prepareStackTrace = undefined;  
  try {
    print(5, frames.length);
    for (var i = 0; i < 2; i++) {
      
      print(o[i], frames[i].getFunction());
      print(o, frames[i].getThis());
    }
    for (var i = 2; i < frames.length; i++) {
      
      print(undefined, frames[i].getFunction());
      print(undefined, frames[i].getThis());
    }
    for (var i = 0; i < frames.length - 1; i++) {
      
      print("f"+i, frames[i].getFunctionName());
    }
    return "success";
  } catch (e) {
    return e;
  }
}

try {
  o[3]();
} catch (e) {
  print("success", e.stack);
};


var o = [ function f0() { "use strict"; throw new Error(); },
          function f1() { o[0](); },
          function f2() { o[1](); },
          function f3() { o[2](); } ];

Error.prepareStackTrace = function(error, frames) {
  Error.prepareStackTrace = undefined;  
  try {
    print(5, frames.length);
    for (var i = 0; i < frames.length; i++) {
      
      print(undefined, frames[i].getFunction());
      print(undefined, frames[i].getThis());
      if (i < frames.length - 1) {  
        print("f"+i, frames[i].getFunctionName());
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
  print("success", e.stack);
};
