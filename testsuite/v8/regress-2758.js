




























var functions = [
  function() { var f = [].concat; f() },
  function() { var f = [].push; f() },
  function() { var f = [].shift; f() },
  function() { (0, [].concat)() },
  function() { (0, [].push)() },
  function() { (0, [].shift)() }
]

for (var i = 0; i < 5; ++i) {
  for (var j in functions) {
    %PrepareFunctionForOptimization(functions[j]);
    print(functions[i])
    assertThrows(functions[j], TypeError)
  }

  if (i === 3) {
    for (var j in functions)
      %OptimizeFunctionOnNextCall(functions[j]);
  }
}
