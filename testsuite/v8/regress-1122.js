

































function function_with_n_params_and_m_args(n, m) {
  test_prefix = 'prefix ';
  test_suffix = ' suffix';
  var source = 'test_prefix + (function f(';
  for (var arg = 0; arg < n ; arg++) {
    if (arg != 0) source += ',';
    source += 'arg' + arg;
  }
  source += ') { return arg' + (n - n % 2) / 2 + '; })(';
  for (var arg = 0; arg < m ; arg++) {
    if (arg != 0) source += ',';
    source += arg;
  }
  source += ') + test_suffix';
  return eval(source);
}

assertEquals('prefix 4000 suffix',
             function_with_n_params_and_m_args(8000, 8000));
assertEquals('prefix 3000 suffix',
             function_with_n_params_and_m_args(6000, 8000));
assertEquals('prefix 5000 suffix',
             function_with_n_params_and_m_args(10000, 8000));
assertEquals('prefix 9000 suffix',
             function_with_n_params_and_m_args(18000, 18000));
assertEquals('prefix 16000 suffix',
             function_with_n_params_and_m_args(32000, 32000));
assertEquals('prefix undefined suffix',
             function_with_n_params_and_m_args(32000, 10000));

assertThrows("function_with_n_params_and_m_args(66000, 30000)");
assertThrows("function_with_n_params_and_m_args(30000, 66000)");
