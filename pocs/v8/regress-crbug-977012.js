function foo(arg) {
  var ret = { x: arg };
  ret.__defineSetter__("y", function() { });
  return ret;
}


let v1 = foo(10);
let v2 = foo(10.5);



v1.x = 20.5;
