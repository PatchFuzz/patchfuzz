const string_max_length = %StringMaxLength();
const longest_double = -2.2250738585105353E-308;
const s18 = "A".repeat(string_max_length - 18);
const s23 = "A".repeat(string_max_length - 23);
const s24 = "A".repeat(string_max_length - 24);
const s25 = "A".repeat(string_max_length - 25);

(function() {
  function f() {
    return s18 + longest_double;
  }

  %PrepareFunctionForOptimization(f);
  print(f, RangeError);
  %OptimizeFunctionOnNextCall(f);
  print(f, RangeError);
})();

(function() {
  function f() {
    return s23 + longest_double;
  }

  %PrepareFunctionForOptimization(f);
  print(f, RangeError);
  %OptimizeFunctionOnNextCall(f);
  print(f, RangeError);
})();

(function() {
  function f() {
    return s24 + longest_double;
  }

  %PrepareFunctionForOptimization(f);
  print(string_max_length, f().length);
  %OptimizeFunctionOnNextCall(f);
  print(string_max_length, f().length);
})();

(function() {
  function f() {
    return s25 + longest_double;
  }

  %PrepareFunctionForOptimization(f);
  print(string_max_length - 1, f().length);
  %OptimizeFunctionOnNextCall(f);
  print(string_max_length - 1, f().length);
})();
