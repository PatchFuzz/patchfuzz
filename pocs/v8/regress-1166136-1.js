function main() {
  function vul(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9,
               arg10, arg11) {
    const res = Reflect.construct(Array,arguments,vul);
    let local_1;
    let local_2;
    let local_3;
    let local_4;
    let local_5;
    return res;
  }

  %PrepareFunctionForOptimization(vul);
  return vul(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12);
}

%PrepareFunctionForOptimization(main);
main();
const unoptimized_result = main();
%OptimizeFunctionOnNextCall(main);
const optimized_result = main();

print(unoptimized_result, optimized_result);
