var body =
  "function bar1(  )  {" +
  "  var i = 35;       " +
  "  while (i-- > 31) {" +
  "    %OptimizeOsr(); " +
  "    j = 9;          " +
  "    %PrepareFunctionForOptimization(bar1); " +
  "    while (j-- > 7);" +
  "  }                 " +
  "  return i;         " +
  "}";

function gen() {
  return eval("(" + body + ")");
}

var f = gen();
%PrepareFunctionForOptimization(f);
f();
