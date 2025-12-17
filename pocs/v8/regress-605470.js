function function_with_m_args(m) {
  var source = '(function f() { return; })(';
  for (var arg = 0; arg < m ; arg++) {
    if (arg != 0) source += ',';
    source += arg;
  }
  source += ')';
  return eval(source);
}

function_with_m_args(0x7FFF);
