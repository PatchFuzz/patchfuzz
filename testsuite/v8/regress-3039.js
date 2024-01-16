




























function do_div(x, y) {
  return x / y | 0;
}


;
%PrepareFunctionForOptimization(do_div);
assertEquals(17, do_div(51, 3));
assertEquals(13, do_div(65, 5));
%OptimizeFunctionOnNextCall(do_div);
assertEquals(11, do_div(77, 7));


assertEquals(-2147483648, do_div(-2147483648, -1));
