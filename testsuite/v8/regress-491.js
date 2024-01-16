





























function function_with_n_strings(n) {
  var source = '(function f(){';
  for (var i = 0; i < n; i++) {
    if (i != 0) source += ';';
    source += '"x"';
  }
  source += '})()';
  eval(source);
}

var i;
for (i = 500; i < 600; i++) {
  function_with_n_strings(i);
}
for (i = 1100; i < 1200; i++) {
  function_with_n_strings(i);
}
