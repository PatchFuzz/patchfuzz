function crash(obj) {
  return obj.foo;
};
%PrepareFunctionForOptimization(crash);
function base(number_of_properties) {
  var result = new Array();
  for (var i = 0; i < number_of_properties; i++) {
    result["property" + i] = "value" + i;
  }
  result.foo = number_of_properties;
  return result;
}

var a = base(12);
var b = base(13);
var c = base(14);
var d = base(15);

crash(a);  
crash(a);
crash(b);
crash(c);
crash(d);  


var x = base(13);
x[0] = "object";
x = base(14);
x[0] = "object";
x = base(15);
x[0] = "object";

%OptimizeFunctionOnNextCall(crash);
crash(a);
