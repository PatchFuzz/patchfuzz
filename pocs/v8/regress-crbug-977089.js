var foo = function() {

  function f1(arg) {
    var ret = { x: arg };
    ret.__defineGetter__("y", function() { });
    return ret;
  }
  
  let v1 = f1(10);
  
  
  let v2 = f1(10.5);

  
  
  
  
  
  
  
  v1.x;

  
  
  
  
  
  let v3 = { z:1 };
  v3.__defineGetter__("z", function() {});
};

%EnsureFeedbackVectorForFunction(foo);
foo();
