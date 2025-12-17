function shift_array() {
  let array = [];
  Object.defineProperty(array, 'length', {writable : false});
  out = array; 
  return array.shift();
}

%PrepareFunctionForOptimization(shift_array);
print(shift_array);
print(shift_array);
%OptimizeFunctionOnNextCall(shift_array);
print(shift_array);
print(shift_array);


function shift_object() {
  let object = { length: 0 };
  Object.defineProperty(object, 'length', {writable : false});
  out = object; 
  return object.shift();
}

%PrepareFunctionForOptimization(shift_object);
print(shift_object);
print(shift_object);
%OptimizeFunctionOnNextCall(shift_object);
print(shift_object);
print(shift_object);
