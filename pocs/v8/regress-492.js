function function_with_n_args(n) {
  var source = '(function f' + n + '(';
  for (var arg = 0; arg < n; arg++) {
    if (arg != 0) source += ',';
    source += 'arg' + arg;
  }
  source += ') { })()';
  eval(source);
}

var args;
for (args = 250; args < 270; args++) {
  function_with_n_args(args);
}

for (args = 500; args < 520; args++) {
  function_with_n_args(args);
}

for (args = 1019; args < 1041; args++) {
  function_with_n_args(args);
}


function foo(
  x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x,
  x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x,
  x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x,
  x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x,
  x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x,
  x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x,
  x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x,
  x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x,
  x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x,
  x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x,
  x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x,
  x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x,
  x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x,
  x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x,
  x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x,
  x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x,
  x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x,
  x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x,
  x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x,
  x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x,
  x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x,
  x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x,
  x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x,
  x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x,
  x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x,
  x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x,
  x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x,
  x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x,
  x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x,
  x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x,
  x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x,
  x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x
) {}

for (var i = 0; i < 10000; ++i) foo();
