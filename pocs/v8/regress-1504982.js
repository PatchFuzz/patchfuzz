var number_of_appends = 0;
function append_to_array(element, index, array) {
  array.push(42);
  number_of_appends++;
}

%NeverOptimizeFunction(append_to_array);

var iteration_count_after_append = 0;
function count_iterations(element, index, array) {
  iteration_count_after_append++;
}

%NeverOptimizeFunction(count_iterations);


function append_to_array_in_forEach_then_iterate_again(arr) {
  
  
  arr.forEach(append_to_array);

  
  
  arr.forEach(count_iterations);
}

%PrepareFunctionForOptimization(append_to_array_in_forEach_then_iterate_again);
number_of_appends = 0;
iteration_count_after_append = 0;
append_to_array_in_forEach_then_iterate_again([12, 34]);
print(number_of_appends, 2);
print(iteration_count_after_append, 4);

%OptimizeFunctionOnNextCall(append_to_array_in_forEach_then_iterate_again);
number_of_appends = 0;
iteration_count_after_append = 0;
append_to_array_in_forEach_then_iterate_again([12, 34]);
print(number_of_appends, 2);
print(iteration_count_after_append, 4);
