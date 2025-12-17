var holey_array = [1, 2, 3, 4, 5,,,,,,];
print(new Array(1), holey_array.slice(6, 7));
print(undefined, holey_array.slice(6, 7)[0]);
print([], holey_array.slice(2, 1));
print(3, holey_array.slice(2, 3)[0]);
