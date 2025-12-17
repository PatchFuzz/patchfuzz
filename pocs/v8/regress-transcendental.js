function test(f, x, name) {
  
  gc();
  
  var runtime_result = f(x);
  
  for (var i = 0; i < 100000; i++) f(i);
  
  var gencode_result = f(x);
  print(name + " runtime function: " + runtime_result);
  print(name + " generated code  : " + gencode_result);
  print(gencode_result, runtime_result);
}

test(Math.tan, -1.57079632679489660000, "Math.tan");
test(Math.sin, 6.283185307179586, "Math.sin");
