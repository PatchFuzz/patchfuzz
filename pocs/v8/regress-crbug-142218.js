length = 1 << 16;
a = new Array(length);

function insert_element(key) {
  a[key] = 42;
};
%PrepareFunctionForOptimization(insert_element);
insert_element(1);
%OptimizeFunctionOnNextCall(insert_element);
insert_element(new Object());
count = 0;
for (var i = 0; i < length; i++) {
  if (a[i] != undefined) count++;
}
print(1, count);
