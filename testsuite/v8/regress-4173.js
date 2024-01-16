





function Migrator(o) {
  return o.foo;
};
%PrepareFunctionForOptimization(Migrator);
function Loader(o) {
  return o[0];
};
%PrepareFunctionForOptimization(Loader);
var first_smi_array = [1];
var second_smi_array = [2];
var first_object_array = ["first"];
var second_object_array = ["string"];

assertTrue(%HasSmiElements(first_smi_array));
assertTrue(%HasSmiElements(second_smi_array));
assertTrue(%HasObjectElements(first_object_array));
assertTrue(%HasObjectElements(second_object_array));


first_smi_array.foo = 0;
second_smi_array.foo = 0;
first_object_array.foo = 0;
second_object_array.foo = 0;


for (var i = 0; i < 3; i++) Migrator(second_object_array);



first_smi_array.foo = 0.5;
print(second_smi_array.foo);



first_object_array.foo = 0.5;
%OptimizeFunctionOnNextCall(Migrator);
Migrator(second_object_array);




for (var i = 0; i < 3; i++) Loader(second_smi_array);
%OptimizeFunctionOnNextCall(Loader);
assertEquals("string", Loader(second_object_array));


assertTrue(%HasObjectElements(second_object_array));
assertFalse(%HasSmiElements(second_object_array));
assertTrue(%HaveSameMap(first_object_array, second_object_array));
assertFalse(%HaveSameMap(first_smi_array, second_object_array));

%ClearFunctionFeedback(Loader);
%ClearFunctionFeedback(Migrator);
