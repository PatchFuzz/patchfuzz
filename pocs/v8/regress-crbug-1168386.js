function __f_0(__v_8) {
    var __v_9 = "mod_";
    var __v_10 = eval(
    'function Module(stdlib, foreign, heap) {\n' +
    ' "use asm";\n' +
    ' function ' + __v_9 + '(dividend) {\n' +
    '  dividend = dividend | 0;\n' +
    '  return ((dividend | 0) % ' + __v_8 + ') | 0;\n'
    + ' }\n' +
    ' return { f: ' + __v_9 + '}\n'
    + '}; Module');
  return __v_10().f;
}
try {
  const __v_5 = -1;
  const __v_6 = __f_0(1);
  for (var __v_7 = 0; __v_7 < 100; __v_7++) {
    __v_7 % __v_5 |  __v_6();
  }
} catch (e) {}
